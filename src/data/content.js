import { BarChart3, Bike, Bot, Database, Eye, Globe2, LockKeyhole, Network, Scale, ShieldCheck, ShoppingBag, Smartphone, Store, Users, WalletCards } from 'lucide-react';

export const navigation = [
  ['opening', 'Mở đầu'], ['theory', 'Lý thuyết'], ['digital-monopoly', 'Độc quyền số'],
  ['ridenow', 'RideNow'], ['real-world', 'Thực tiễn'], ['solutions', 'Giải pháp'],
  ['conclusion', 'Kết luận'], ['sources', 'Nguồn'],
];

export const openingStories = [
  { icon: Smartphone, title: 'Người dùng', text: 'Gọi xe, đặt đồ ăn, thanh toán và nhận ưu đãi chỉ trong một ứng dụng.' },
  { icon: Bike, title: 'Tài xế', text: 'Cơ hội nhận đơn phụ thuộc ngày càng nhiều vào nền tảng và thuật toán.' },
  { icon: Store, title: 'Quán ăn', text: 'Khách hàng đến từ nền tảng, nhưng thứ hạng hiển thị và khuyến mãi cũng do nền tảng chi phối.' },
];

export const pillars = [
  { icon: Database, title: 'Dữ liệu', text: 'Càng nhiều người dùng, nền tảng càng tích lũy nhiều dữ liệu về hành vi, nhu cầu và thói quen tiêu dùng.' },
  { icon: Network, title: 'Hiệu ứng mạng', text: 'Nhiều người dùng hơn làm nền tảng hấp dẫn hơn với tài xế, quán ăn và đối tác; từ đó lại tiếp tục thu hút thêm người dùng.' },
  { icon: Bot, title: 'Thuật toán', text: 'Thuật toán có thể ảnh hưởng đến giá, phân phối đơn hàng, thứ hạng hiển thị và khả năng tiếp cận khách hàng.' },
  { icon: Globe2, title: 'Hệ sinh thái số', text: 'Khi gọi xe, giao đồ ăn, thanh toán, bản đồ và ưu đãi được liên kết, người dùng và đối tác có thể khó rời khỏi nền tảng hơn.' },
];

export const storySteps = [
  { number: '01', title: 'Khuyến mãi sâu', text: 'RideNow giảm giá mạnh để thu hút người dùng. Trong ngắn hạn, người dùng được hưởng lợi. Nhưng nếu kéo dài, đối thủ nhỏ có thể bị gây sức ép.' },
  { number: '02', title: 'Dữ liệu tích lũy', text: 'Khi có thêm người dùng, RideNow thu thập được nhiều dữ liệu hơn về nhu cầu, hành vi và thời điểm sử dụng dịch vụ.' },
  { number: '03', title: 'Thuật toán tối ưu', text: 'Dữ liệu giúp thuật toán gợi ý dịch vụ, phân phối đơn hàng và xếp hạng hiển thị hiệu quả hơn.' },
  { number: '04', title: 'Hệ sinh thái khép kín', text: 'Khi nhiều dịch vụ cùng nằm trong một nền tảng, chi phí chuyển sang nền tảng khác có thể cao hơn và sự phụ thuộc có thể tăng lên.' },
];

export const realExamples = [
  { icon: Bike, title: 'Gọi xe và giao đồ ăn', text: 'Người dùng được hưởng sự tiện lợi, nhưng tài xế và quán ăn có thể phụ thuộc vào chính sách hiển thị, phí và thuật toán phân phối đơn.' },
  { icon: ShoppingBag, title: 'Thương mại điện tử', text: 'Người bán dễ tiếp cận khách hàng hơn, nhưng cũng cần thích nghi với thứ hạng tìm kiếm, quảng cáo, phí nền tảng và chương trình khuyến mãi.' },
  { icon: Eye, title: 'Mạng xã hội và nội dung số', text: 'Thuật toán đề xuất có thể ảnh hưởng đến việc nội dung nào được nhìn thấy nhiều hơn.' },
  { icon: WalletCards, title: 'Thanh toán số và hệ sinh thái dịch vụ', text: 'Khi nhiều dịch vụ liên kết trong một hệ sinh thái, người dùng có thể thuận tiện hơn nhưng cũng dễ phụ thuộc hơn.' },
];

export const values = [
  { icon: Users, title: 'Với người dùng', text: 'Hiểu rõ quyền lựa chọn, quyền dữ liệu và rủi ro phụ thuộc vào một nền tảng.' },
  { icon: Store, title: 'Với người lao động và doanh nghiệp nhỏ', text: 'Nhận diện tác động của phí nền tảng, thuật toán phân phối đơn và thứ hạng hiển thị.' },
  { icon: Scale, title: 'Với nhà quản lý', text: 'Có cơ sở để xây dựng chính sách cạnh tranh công bằng, minh bạch dữ liệu và hạn chế hành vi lạm dụng vị thế thị trường nếu có.' },
];

export const solutions = [
  { icon: BarChart3, title: 'Minh bạch thuật toán', text: 'Cần rõ hơn về tiêu chí hiển thị, phân phối đơn và chính sách ảnh hưởng đến người dùng, tài xế, quán ăn.' },
  { icon: ShieldCheck, title: 'Bảo vệ dữ liệu cá nhân', text: 'Dữ liệu là nguồn lực quan trọng trong kinh tế số, vì vậy người dùng cần được bảo vệ quyền riêng tư và quyền kiểm soát dữ liệu.' },
  { icon: Network, title: 'Tạo điều kiện cho nền tảng mới', text: 'Cạnh tranh công bằng giúp doanh nghiệp mới có cơ hội tham gia thị trường và tạo thêm lựa chọn cho người dùng.' },
  { icon: LockKeyhole, title: 'Hoàn thiện quản lý cạnh tranh', text: 'Nhà nước cần theo dõi hành vi lạm dụng vị thế thị trường, đồng thời vẫn khuyến khích đổi mới sáng tạo.' },
];
