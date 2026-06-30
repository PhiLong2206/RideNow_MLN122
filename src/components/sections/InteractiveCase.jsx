import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Bot, Check, CheckCircle2, Database, Globe2, Network, RefreshCcw, Scale, XCircle } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import styles from './InteractiveCase.module.css';

const scenarios = [
  {
    kicker: 'TÌNH HUỐNG 01 · CẠNH TRANH', title: 'Tình huống 1: Cuộc chiến khuyến mãi', correct: 0,
    situation: 'MoveGo và FastTrip đang cạnh tranh mạnh. RideNow muốn thu hút người dùng mới thật nhanh.',
    question: 'Chiến lược nào có thể làm thị trường dần tập trung hơn nếu kéo dài?',
    theory: 'Cạnh tranh → doanh nghiệp có lợi thế mở rộng → thị trường có thể tập trung hơn.',
    choices: [
      { text: 'Giảm giá thật sâu trong thời gian dài.', explanation: 'Khuyến mãi sâu có thể thu hút người dùng nhanh. Nếu doanh nghiệp có nguồn lực mạnh duy trì ưu đãi kéo dài, đối thủ nhỏ có thể chịu sức ép và thị trường có xu hướng tập trung hơn.' },
      { text: 'Cải thiện chất lượng dịch vụ và giữ giá hợp lý.', explanation: 'Cải thiện chất lượng và giữ giá hợp lý là hướng cạnh tranh lành mạnh hơn. Nó chưa thể hiện rõ nguy cơ thị trường tập trung do sức ép từ nguồn lực lớn.' },
      { text: 'Giữ nguyên mô hình cũ, không thay đổi.', explanation: 'Không thay đổi mô hình cũ thường không tạo ra lợi thế cạnh tranh rõ rệt. Trọng tâm ở đây là tác động của khuyến mãi sâu kéo dài đến cấu trúc thị trường.' },
    ],
  },
  {
    kicker: 'TÌNH HUỐNG 02 · DỮ LIỆU', title: 'Tình huống 2: Dữ liệu người dùng', correct: 0,
    situation: 'RideNow có hàng triệu lượt đặt xe, đặt đồ ăn và thanh toán mỗi ngày. Nền tảng bắt đầu hiểu rõ thói quen của người dùng.',
    question: 'Yếu tố nào tạo lợi thế mới quan trọng nhất cho RideNow?',
    theory: 'Dữ liệu trở thành một nguồn lực cạnh tranh mới trong nền kinh tế số.',
    choices: [
      { text: 'Dữ liệu hành vi và nhu cầu của người dùng.', explanation: 'Trong nền kinh tế số, dữ liệu là nguồn lực rất quan trọng. Càng nhiều người dùng, nền tảng càng có nhiều dữ liệu để cải thiện dịch vụ và tăng lợi thế cạnh tranh.' },
      { text: 'Màu sắc giao diện của ứng dụng.', explanation: 'Giao diện đẹp có thể hỗ trợ trải nghiệm, nhưng không phải nguồn tạo quyền lực đặc trưng của nền kinh tế số.' },
      { text: 'Số lượng văn phòng làm việc.', explanation: 'Số lượng văn phòng không phải yếu tố cốt lõi trong biểu hiện mới của độc quyền số. Trọng tâm là dữ liệu, thuật toán và mạng lưới người dùng.' },
    ],
  },
  {
    kicker: 'TÌNH HUỐNG 03 · HIỆU ỨNG MẠNG', title: 'Tình huống 3: Hiệu ứng mạng', correct: 0,
    situation: 'Càng nhiều người dùng tham gia RideNow, càng nhiều tài xế và quán ăn muốn có mặt trên nền tảng. Khi có nhiều tài xế và quán ăn, người dùng lại càng muốn dùng RideNow hơn.',
    question: 'Hiện tượng này được gọi là gì?',
    theory: 'Nhiều người dùng → nhiều đối tác → dịch vụ hữu ích hơn → thu hút thêm người dùng.',
    choices: [
      { text: 'Hiệu ứng mạng.', explanation: 'Hiệu ứng mạng xảy ra khi càng nhiều người tham gia thì nền tảng càng trở nên hữu ích và hấp dẫn hơn với các nhóm người dùng khác.' },
      { text: 'Lạm phát.', explanation: 'Lạm phát liên quan đến mức giá chung của nền kinh tế, không phải hiện tượng người dùng và đối tác làm tăng giá trị của nền tảng.' },
      { text: 'Khấu hao tài sản.', explanation: 'Khấu hao tài sản là sự giảm giá trị của tài sản theo thời gian, không liên quan trực tiếp đến sự gia tăng giá trị của nền tảng nhờ số lượng người tham gia.' },
    ],
  },
  {
    kicker: 'TÌNH HUỐNG 04 · THUẬT TOÁN', title: 'Tình huống 4: Thuật toán hiển thị', correct: 0,
    situation: 'Một quán ăn không tham gia chương trình khuyến mãi bị hiển thị thấp hơn. Một tài xế có đánh giá thấp bị ít nhận đơn hơn.',
    question: 'Điều gì đang ảnh hưởng trực tiếp đến cơ hội tiếp cận khách hàng và đơn hàng?',
    theory: 'Thuật toán có thể trở thành công cụ tạo và duy trì lợi thế cạnh tranh của nền tảng số.',
    choices: [
      { text: 'Thuật toán do nền tảng kiểm soát.', explanation: 'Thuật toán có thể ảnh hưởng đến thứ hạng hiển thị, phân phối đơn, gợi ý dịch vụ và cơ hội tiếp cận khách hàng. Đây là một biểu hiện quan trọng trong nền kinh tế số.' },
      { text: 'Thời tiết trong ngày.', explanation: 'Thời tiết có thể ảnh hưởng đến nhu cầu, nhưng trong tình huống này yếu tố trực tiếp quyết định hiển thị và phân đơn là thuật toán của nền tảng.' },
      { text: 'Tên ứng dụng ngắn hay dài.', explanation: 'Tên ứng dụng không quyết định cơ hội tiếp cận khách hàng. Trọng tâm là cách thuật toán kiểm soát hiển thị và phân phối đơn.' },
    ],
  },
  {
    kicker: 'TÌNH HUỐNG 05 · HỆ SINH THÁI', title: 'Tình huống 5: Hệ sinh thái số', correct: 0,
    situation: 'RideNow không chỉ có gọi xe mà còn có giao đồ ăn, thanh toán, bản đồ, ưu đãi và ví điện tử. Người dùng ngày càng ít muốn rời khỏi ứng dụng.',
    question: 'Yếu tố nào khiến người dùng và đối tác dễ phụ thuộc hơn vào nền tảng?',
    theory: 'Hệ sinh thái số có thể làm chi phí chuyển đổi tăng và góp phần tập trung quyền lực thị trường.',
    choices: [
      { text: 'Hệ sinh thái số liên kết nhiều dịch vụ.', explanation: 'Khi nhiều dịch vụ được liên kết trong cùng một nền tảng, người dùng và đối tác có thể thấy tiện lợi hơn nhưng cũng khó rời khỏi hệ sinh thái hơn.' },
      { text: 'Logo của ứng dụng.', explanation: 'Logo có thể giúp nhận diện thương hiệu, nhưng không phải yếu tố chính làm người dùng và đối tác phụ thuộc vào nền tảng.' },
      { text: 'Số tầng của trụ sở công ty.', explanation: 'Số tầng của trụ sở không liên quan đến quyền lực thị trường trong nền kinh tế số. Trọng tâm là hệ sinh thái dịch vụ liên kết.' },
    ],
  },
];

const concepts = [
  { icon: Scale, label: 'Cạnh tranh và khuyến mãi' }, { icon: Database, label: 'Dữ liệu' },
  { icon: Network, label: 'Hiệu ứng mạng' }, { icon: Bot, label: 'Thuật toán' }, { icon: Globe2, label: 'Hệ sinh thái số' },
];

export default function InteractiveCase() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [complete, setComplete] = useState(false);
  const scenario = scenarios[step];
  const continueStory = () => step === scenarios.length - 1 ? setComplete(true) : (setStep((current) => current + 1), setSelected(null));
  const replay = () => { setStep(0); setSelected(null); setComplete(false); };
  const goToRealWorld = () => document.getElementById('real-world')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return <section id="interactive-case" className={`${styles.caseStudy} section`}><div className="section-inner">
    <SectionHeading eyebrow="04 · Ban điều hành RideNow" title="Trải nghiệm tương tác: Quyết định của RideNow" lead="Hãy chọn cách RideNow phản ứng trong từng tình huống và quan sát hậu quả của mỗi quyết định." />
    <AnimatePresence mode="wait">
      {!complete ? <motion.div className={styles.lesson} key={step} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .4 }}>
        <LessonProgress step={step} />
        <div className={styles.storyPanel}>
          <span className={styles.kicker}>{scenario.kicker}</span><h3>{scenario.title}</h3><p className={styles.situation}>{scenario.situation}</p><h4>{scenario.question}</h4>
          <div className={styles.choices}>{scenario.choices.map((choice, index) => {
            const isSelected = selected === index;
            const isCorrect = index === scenario.correct;
            const revealCorrect = selected !== null && selected !== scenario.correct && isCorrect;
            const stateClass = isSelected ? (isCorrect ? styles.correctChoice : styles.incorrectChoice) : revealCorrect ? styles.suggestedChoice : '';
            return <motion.button key={choice.text} className={stateClass} onClick={() => setSelected(index)} whileHover={{ x: 5 }} whileTap={{ scale: .985 }} aria-pressed={isSelected}>
              <b>{String.fromCharCode(65 + index)}</b><span>{choice.text}</span>{(isSelected || revealCorrect) && (isCorrect ? <CheckCircle2 /> : <XCircle />)}
            </motion.button>;
          })}</div>
          <AnimatePresence mode="wait">{selected !== null && <Feedback key={selected} scenario={scenario} selected={selected} />}</AnimatePresence>
          {selected !== null && <motion.div className={styles.continueRow} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <span>Bạn có thể chọn lại một đáp án khác hoặc xóa lựa chọn hiện tại.</span>
            <div><button className={styles.retry} onClick={() => setSelected(null)}><RefreshCcw /> Trả lời lại</button><button className={styles.continue} onClick={continueStory}>{step === scenarios.length - 1 ? 'Xem tổng kết' : 'Tiếp tục'} <ArrowRight /></button></div>
          </motion.div>}
        </div>
      </motion.div> : <FinalResult onReplay={replay} onContinue={goToRealWorld} />}
    </AnimatePresence>
  </div></section>;
}

function LessonProgress({ step }) {
  const total = scenarios.length;
  return <div className={styles.lessonProgress} aria-label={`Tình huống ${step + 1} trên ${total}`}>
    <div className={styles.progressCopy}><span>Tình huống {step + 1} / {total}</span><small>{Math.round(((step + 1) / total) * 100)}% hành trình</small></div>
    <div className={styles.progressTrack}><motion.i initial={{ width: `${(step / total) * 100}%` }} animate={{ width: `${((step + 1) / total) * 100}%` }} /></div>
    <div className={styles.dots}>{scenarios.map((item, index) => <i key={item.title} className={index <= step ? styles.dotActive : ''}>{index < step ? <Check /> : null}</i>)}</div>
  </div>;
}

function Feedback({ scenario, selected }) {
  const choice = scenario.choices[selected];
  const correctChoice = scenario.choices[scenario.correct];
  const correct = selected === scenario.correct;
  return <motion.div className={`${styles.feedback} ${correct ? styles.feedbackCorrect : styles.feedbackIncorrect}`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .28 }}>
    <div className={styles.feedbackHeading}>{correct ? <CheckCircle2 /> : <XCircle />}<div><span>{correct ? 'CHÍNH XÁC' : 'CHƯA CHÍNH XÁC'}</span><h4>{correct ? 'Chính xác' : 'Chưa chính xác'}</h4></div></div>
    {!correct && <p className={styles.gentleNote}>Lựa chọn này hợp lý ở một khía cạnh, nhưng chưa phản ánh đúng trọng tâm lý thuyết.</p>}
    <div className={styles.explanation}><div><span>{correct ? 'GIẢI THÍCH' : 'VÌ SAO CHƯA PHÙ HỢP?'}</span><p>{choice.explanation}</p></div><div><span>LIÊN HỆ LÝ THUYẾT</span><p>{scenario.theory}</p></div></div>
    {!correct && <div className={styles.betterAnswer}><span>ĐÁP ÁN ĐÚNG</span><strong>A. {correctChoice.text}</strong><p>{correctChoice.explanation}</p></div>}
  </motion.div>;
}

function FinalResult({ onReplay, onContinue }) {
  return <motion.div className={styles.finalResult} key="final" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
    <div className={styles.finalGlow}><Check /></div><span>HOÀN THÀNH 5 / 5 TÌNH HUỐNG</span><h3>Hoàn thành trải nghiệm RideNow</h3>
    <p>Qua 5 tình huống, chúng ta thấy rằng biểu hiện mới của độc quyền trong nền kinh tế số có thể gắn với khuyến mãi kéo dài, dữ liệu, hiệu ứng mạng, thuật toán và hệ sinh thái số.</p>
    <div className={styles.concepts}>{concepts.map(({ icon: Icon, label }, index) => <motion.div key={label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 + index * .1 }}><Icon /><span>{label}</span><Check /></motion.div>)}</div>
    <div className={styles.finalBridge}>Đây là phần minh họa cho nội dung 4.3.1 – Biểu hiện mới của độc quyền.</div>
    <div className={styles.finalActions}><button onClick={onContinue}>Tiếp tục đến liên hệ thực tiễn <ArrowRight /></button><button onClick={onReplay}><RefreshCcw /> Chơi lại từ đầu</button></div>
  </motion.div>;
}
