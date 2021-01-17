const questions = [
  {
    questionText:
      '<h1>Khi có sự xung đột <i>giữa</i> hai thành viên trong đội, bạn sẽ?</h1>',
    questionType: false,
    answerOptions: [
      {
        answerText: 'Ngay lập tức giải quyết, buộc hai bên phải dừng lại ngay',
        isCorrect: false,
      },
      {
        answerText:
          'Mềm mỏng, lắng nghe và khuyên bảo từng người, giữ hoà khí trong đội',
        isCorrect: false,
      },
      {
        answerText:
          'Lắng nghe, quan sát và tìm ra nguyên nhân và giải pháp xung đột.',
        isCorrect: true,
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
        isCorrect: false,
      },
      {
        answerText: 'Có sự tin tưởng và gắn kết vững chắc làm nền tảng cho CV',
        isCorrect: true,
      },
      {answerText: 'Nhiều người giỏi', isCorrect: false},
      {answerText: 'Có thành viên gánh team', isCorrect: false},
    ],
  },
  {
    questionText:
      '<h1>Điều bạn không thích khi làm việc nhóm? ladsfasdfasdfasdfasdfadfasdfadfad</h1>',
    questionType: true,
    answerOptions: [
      {
        answerText: 'Có nên giúp đỡ',
        isCorrect: true,
      },
      {
        answerText: 'Không nên giúp đỡ',
        isCorrect: false,
      },
    ],
  },
];

module.exports = questions;
