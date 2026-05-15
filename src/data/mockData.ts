// Audio tracks data
export const audioTracks = [
  { 
    label: 'Forest Waltz', 
    url: 'https://res.cloudinary.com/da4y5zf5k/video/upload/Forest-Waltz_sam8s8.wav' 
  },
  { 
    label: 'Nature Sounds', 
    url: 'https://assets.mixkit.co/music/preview/mixkit-nature-sounds-1115.mp3' 
  },
  { 
    label: 'Soothing Ambient', 
    url: 'https://assets.mixkit.co/music/preview/mixkit-soothing-ambient-1108.mp3' 
  },
  { 
    label: 'Ambient Piano', 
    url: 'https://assets.mixkit.co/music/preview/mixkit-ambient-piano-1119.mp3' 
  },
];

// Leaf cards (Oracle readings) data
export const leafCards = [
  {
    id: 1,
    category: '#01 - Trí tuệ',
    title: 'Sự Kiên Định Của Sồi',
    quote: '"Như rễ cây đâm sâu vào lòng đất, hãy vững chãi trước những bão giông của cảm xúc. Sự im lặng là sức mạnh lớn nhất của bạn lúc này."',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=800&auto=format&fit=crop',
    favorite: true
  },
  {
    id: 2,
    category: '#12 - Khởi đầu',
    title: 'Dương Xỉ Nảy Chồi',
    quote: '"Mọi hành trình vĩ đại đều bắt đầu từ một sự chuyển mình nhỏ bé. Hãy cho phép bản thân được mềm yếu và dịu dàng với chính mình."',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop',
    favorite: false
  },
  {
    id: 3,
    category: '#08 - Buông bỏ',
    title: 'Vũ Điệu Của Phong',
    quote: '"Sự thay đổi không phải là mất mát, mà là nhường chỗ cho vẻ đẹp mới. Hãy buông tay để được cuốn trôi theo dòng chảy của định mệnh."',
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop',
    favorite: false
  },
  {
    id: 4,
    category: '#24 - Thanh tịnh',
    title: 'Lá Sen Giữa Hồ',
    quote: '"Giữa những xao động của trần thế, hãy tìm về tâm điểm của sự bình yên. Mọi phiền não sẽ trôi đi như những giọt nước trên lá sen."',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    favorite: true
  }
];

// Oracle suggestions
export const oracleSuggestions = [
  "Kể tôi nghe về sự tĩnh tại",
  "Làm sao để buông bỏ muộn phiền?",
  "Lòng biết ơn trong từng hơi thở"
];

// Zodiac data
export const zodiacData = {
  Aquarius: {
    sign: 'Aquarius',
    personality: 'Sáng tạo, độc lập, nhân đạo',
    strengths: ['Sáng tạo', 'Độc lập', 'Nhân đạo'],
    weaknesses: ['Khó gần', 'Bướng bỉnh', 'Lạc lõng']
  },
  Pisces: {
    sign: 'Pisces',
    personality: 'Nhạy cảm, nghệ sĩ, đồng cảm',
    strengths: ['Nhạy cảm', 'Nghệ sĩ', 'Đồng cảm'],
    weaknesses: ['Dễ bị tổn thương', 'Mơ màng', 'Thiếu quyết đoán']
  },
  Aries: {
    sign: 'Aries',
    personality: 'Năng động, dũng cảm, lãnh đạo',
    strengths: ['Năng động', 'Dũng cảm', 'Lãnh đạo'],
    weaknesses: ['Ích kỷ', 'Bộc trực', 'Thiếu kiên nhẫn']
  },
  Taurus: {
    sign: 'Taurus',
    personality: 'Ổn định, kiên trì, thực tế',
    strengths: ['Ổn định', 'Kiên trì', 'Thực tế'],
    weaknesses: ['Bướng bỉnh', 'Lười biếng', 'Vật chất']
  },
  Gemini: {
    sign: 'Gemini',
    personality: 'Thông minh, linh hoạt, giao tiếp tốt',
    strengths: ['Thông minh', 'Linh hoạt', 'Giao tiếp tốt'],
    weaknesses: ['Bất ổn', 'Thổi phồng', 'Thiếu tập trung']
  },
  Cancer: {
    sign: 'Cancer',
    personality: 'Nuôi dưỡng, cảm xúc, bảo vệ',
    strengths: ['Nuôi dưỡng', 'Cảm xúc', 'Bảo vệ'],
    weaknesses: ['Cảm xúc', 'Phụ thuộc', 'Bảo thủ']
  },
  Leo: {
    sign: 'Leo',
    personality: 'Tự tin, hào phóng, sáng tạo',
    strengths: ['Tự tin', 'Hào phóng', 'Sáng tạo'],
    weaknesses: ['Kiêu ngạo', 'Lười biếng', 'Cần chú ý']
  },
  Virgo: {
    sign: 'Virgo',
    personality: 'Chi tiết, thực tế, phục vụ',
    strengths: ['Chi tiết', 'Thực tế', 'Phục vụ'],
    weaknesses: ['Phê phán', 'Lo lắng', 'Hoài nghi']
  },
  Libra: {
    sign: 'Libra',
    personality: 'Công bằng, hòa bình, xã giao',
    strengths: ['Công bằng', 'Hòa bình', 'Xã giao'],
    weaknesses: ['Do dự', 'Tránh xung đột', 'Phụ thuộc']
  },
  Scorpio: {
    sign: 'Scorpio',
    personality: 'Đam mê, bí mật, quyết đoán',
    strengths: ['Đam mê', 'Bí mật', 'Quyết đoán'],
    weaknesses: ['Ghen tị', 'Cáu kỉnh', 'Bí mật quá mức']
  },
  Sagittarius: {
    sign: 'Sagittarius',
    personality: 'Tự do, phiêu lưu, lạc quan',
    strengths: ['Tự do', 'Phiêu lưu', 'Lạc quan'],
    weaknesses: ['Bất cẩn', 'Thiếu kiên nhẫn', 'Quá trung thực']
  },
  Capricorn: {
    sign: 'Capricorn',
    personality: 'Kỷ luật, chịu trách nhiệm, thành công',
    strengths: ['Kỷ luật', 'Chịu trách nhiệm', 'Thành công'],
    weaknesses: ['Lạnh lùng', 'Cứng nhắc', 'Quá tập trung vào công việc']
  }
};
