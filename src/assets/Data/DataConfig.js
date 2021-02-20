// work group
const questions = [
  {
    questionText:
      '<h1>Khi có sự xung đột <i>giữa</i> hai thành viên trong đội, bạn sẽ?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Ngay lập tức giải quyết, buộc hai bên phải dừng lại ngay',
      },
      {
        answerText:
          'Mềm mỏng, lắng nghe và khuyên bảo từng người, giữ hoà khí trong đội',
      },
      {
        answerText:
          'Lắng nghe, quan sát và tìm ra nguyên nhân và giải pháp xung đột.',
      },
    ],
  },
  {
    questionText:
      '<h1>Chọn 1 trong những tiêu chí sau để đánh giá 1 team mạnh.</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Hiệu quả công việc là tiêu trí quan trọng nhất',
      },
      {
        answerText: 'Có sự tin tưởng và gắn kết vững chắc làm nền tảng cho CV',
      },
      {answerText: 'Nhiều người giỏi'},
      {answerText: 'Có thành viên gánh team'},
    ],
  },
  {
    questionText: '<h1>Điều bạn không thích khi làm việc nhóm?</h1>',
    questionType: true,
    answerOptions: [
      {
        answerText: 'Có nên giúp đỡ',
      },
      {
        answerText: 'Không nên giúp đỡ',
      },
    ],
  },
];

// socialMedia data
const socialMedia = [
  {
    questionText: '<h1>Bạn có sử dụng mạng xã hội không?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Có, tôi có sử dụng',
      },
      {
        answerText: 'Không, tôi không dùng nó',
      },
    ],
  },
  {
    questionText: '<h1>Độ tuổi nào bạn bắt đầu dùng MXH?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Từ 14-18 tuổi',
      },
      {
        answerText: 'Từ 18-25 tuổi',
      },
      {
        answerText: 'Từ 25-40 tuổi',
      },
      {
        answerText: 'Từ 40-65 tuổi',
      },
      {
        answerText: 'Trên 65 tuổi',
      },
    ],
  },
  {
    questionText: '<h1>Bạn đã dùng những mạng xã hội nào dưới đây?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Facebook',
      },
      {
        answerText: 'Instagram',
      },
      {answerText: 'Twitter'},
      {
        answerText: 'Tiktok',
      },
      {
        answerText: 'Tinder',
      },
      {
        answerText: 'Zalo',
      },
      {answerText: 'Tất cả các MXH trên'},
    ],
  },
  {
    questionText:
      '<h1>Hãy viết một vài điều, nói lên vì sao bạn sử dụng MXH.</h1>',
    questionType: true,
  },
];

// personal data
const personal = [
  {
    questionText: '<h1>What is your name? (Tên của bạn là gì?)</h1>',
    questionType: true,
  },
  {
    questionText: '<h1>Gender/Giới tính</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Male (Nam)',
      },
      {
        answerText: 'Female (Nữ)',
      },
    ],
  },
  {
    questionText: '<h1>Age/Độ Tuổi</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Less than 25 (Dưới 25 tuổi)',
      },
      {
        answerText: 'From 26~35 years old. (Từ 26-35 tuổi)',
      },
      {
        answerText: 'More than 35 (Trên 35 tuổi)',
      },
    ],
  },
  {
    questionText: '<h1>Occupation/Nghề nghiệp</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Government (Chính trị)',
      },
      {
        answerText: 'Business (Kinh doanh)',
      },
      {answerText: 'Employee (Nhân viên)'},
      {
        answerText: 'Others (Khác)',
      },
    ],
  },
];

// disease data
const disease = [
  {
    questionText: '<h1>This is the question A?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Answer 1',
      },
      {
        answerText: 'Answer 2',
      },
      {
        answerText: 'Answer 3',
      },
    ],
  },
  {
    questionText: '<h1>This is the question B?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Answer 1',
      },
      {
        answerText: 'Answer 2',
      },
    ],
  },
  {
    questionText: '<h1>This is the question C?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Answer A',
      },
      {
        answerText: 'Answer B',
      },
      {
        answerText: 'Answer C',
      },
    ],
  },
];

// workHome data
const workHome = [
  {
    questionText:
      '<h1>Do you like working from home? (Bạn có thích làm việc tại nhà không?)</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Yes (có)',
      },
      {
        answerText: 'No (không)',
      },
    ],
  },
  {
    questionText:
      '<h1>Why do you work from home? (Tại sao bạn phải làm việc tại nhà?)</h1>',
    questionType: true,
  },
  {
    questionText:
      '<h1>What factors are distracting at home? (Những yếu tố nào gây mất tập trung ở nhà)</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Noise from neighbors (Tiếng ồn từ hàng xóm)',
      },
      {
        answerText: 'Take care of your children (Chăm sóc con cái)',
      },
      {
        answerText: 'Many other things (Nhiều thứ khác)',
      },
    ],
  },
  {
    questionText:
      '<h1>If you could choose a workplace, where would you choose to work?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Work at home (Làm việc tại nhà)',
      },
      {
        answerText: 'Work at company (Làm việc tại công ty)',
      },
      {answerText: 'Working at the cafe (Làm việc tại quán cafe)'},
      {
        answerText: 'Any where (Bất cứ nơi nào)',
      },
    ],
  },
];

// lifeQuality data
const lifeQuality = [
  {
    questionText: '<h1>Life Quality?</h1>',
    questionType: true,
  },
  {
    questionText: '<h1>Question A?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: '1',
      },
      {
        answerText: '2',
      },
    ],
  },
  {
    questionText: '<h1>Question B?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'A',
      },
      {
        answerText: 'B',
      },
      {
        answerText: 'C',
      },
    ],
  },
  {
    questionText: '<h1>Question C?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'D',
      },
      {
        answerText: 'E',
      },
      {answerText: 'F'},
      {
        answerText: 'Others (Khác)',
      },
    ],
  },
];

// module.exports = questions;
export {questions, socialMedia, personal, disease, workHome, lifeQuality};
