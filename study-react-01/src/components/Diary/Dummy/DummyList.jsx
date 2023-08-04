import DiaryList from "../DiaryList";
const dummyList = [
  {
    id: 1,
    author: "이윤선",
    content: "첫번째 일기",
    emotion: "기쁨",
    date: "2023년7월21일",
  },
  {
    id: 2,
    author: "이윤선",
    content: "두번째 일기",
    emotion: "신남",
    date: "2023년7월27일",
  },
  {
    id: 3,
    author: "이윤선",
    content: "세번째 일기",
    emotion: "떨림",
    date: "2023년8월1일",
  },
];

const DummyList = () => {
  return (
    <>
      <DiaryList diaryList={dummyList} />
    </>
  );
};

export default DummyList;
