import ProjectTitle from '../Components/ItemContents/ProjectTitle';
import ProjectImg from '../Components/ItemContents/ProjectImg';
import ProjectSummary from '../Components/ItemContents/ProjectSummary';
import ProjectCategory from '../Components/ItemContents/ProjectCategory';
import ProjectSearchTag from '../Components/ItemContents/ProjectSearchTag';
import ProfileImg from '../Components/ItemContents/ProfileImg';
import CreatorName from '../Components/ItemContents/CreatorName';
import CreatorIntroduce from '../Components/ItemContents/CreatorIntroduce';
import GoalAmount from '../Components/ItemContents/GoalAmount';
import ProjectOpenDate from '../Components/ItemContents/ProjectOpenDate';
import ProjectDueDate from '../Components/ItemContents/ProjectDueDate';
import AddReward from '../Components/ItemContents/AddReward';

const PROJECT_START_DATA = [
  {
    pageTitle: '프로젝트 개요',
    categories: [
      {
        id: 1,
        title: '프로젝트 개요',
        contents: [
          {
            id: 1,
            title: '프로젝트 제목',
            requiredText: '프로젝트 제목을 입력해주세요',
            description:
              '프로젝트에 멋진 제목을 붙여주세요. \n 감정에 호소하는 제목보다는 만드시려는 창작물, 작품명, 혹은 프로젝트의 주제가 드러나게 써주시는 것이 좋습니다. \n 공간이 부족한 곳에 쓰일 7자 이내의 짧은 제목도 정해주세요.',
            inputComponent: <ProjectTitle />,
          },
          {
            id: 2,
            title: '프로젝트 대표 이미지',
            requiredText: '프로젝트 대표 이미지를 등록해주세요',
            description:
              '대표 이미지는 프로젝트의 가장 중요한 시각적 요소입니다. \n  후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있게 하기 위해 다음 가이드라인에 따라 디자인해 주세요.',
            inputComponent: <ProjectImg />,
          },
          {
            id: 3,
            title: '프로젝트 요약',
            requiredText: '프로젝트를 간단하게 소개해주세요',
            description:
              '후원자 분들에게 본 프로젝트를 간략하게 소개해 봅시다.',
            inputComponent: <ProjectSummary />,
          },
          {
            id: 4,
            title: '프로젝트 카테고리',
            requiredText: '카테고리를 선택해주세요',
            description:
              '프로젝트의 성격에 맞는 카테고리를 선택해 주세요. \n  (프로젝트 성격과 맞지 않는 카테고리를 선택하실 시 후원자가 해당 프로젝트를 찾기 어려워지기에 에디터에 의해 조정될 수 있습니다.',
            inputComponent: <ProjectCategory />,
          },
          {
            id: 5,
            title: '검색용 태그',
            requiredText: '예시 : 떡볶이, 순대, 튀김',
            description:
              '내외부 검색 엔진에서 프로젝트가 잘 검색될 수 있도록, 사람들이 검색할만한 프로젝트의 핵심 단어를 입력해주세요. \n  여러 개의 태그를 입력하시는 경우 쉼표(,)로 구분하여 작성하실 수 있습니다. \n  프로젝트와 관련 없거나 검색에 불리한 키워드는 운영진에 의해 조정될 수 있습니다. \n  쉼표를 제외한 특수문자는 입력하실 수 없습니다.',
            inputComponent: <ProjectSearchTag />,
          },
        ],
      },
      {
        id: 2,
        title: '창작자 정보',
        contents: [
          {
            id: 1,
            title: '프로필 이미지',
            requiredText: '창작자님의 프로필 이미지를 올려주세요',
            description:
              '창작자님 개인이나 팀의 사진을 올려주세요. \n  얼굴이 나온 사진을 넣으면 프로젝트의 신뢰성 향상에 도움이 됩니다.',
            inputComponent: <ProfileImg />,
          },
          {
            id: 2,
            title: '창작자 이름',
            requiredText: 'ToDo : user 데이터 어떻게 받아오기',
            description:
              '창작자님을 대표할 수 있는 이름을 써 주세요. \n  팀으로 진행하신다면 팀 이름을 쓰셔도 됩니다',
            inputComponent: <CreatorName />,
          },
          {
            id: 3,
            title: '창작자 소개',
            requiredText: '창작자 소개를 입력해주세요',
            description: '창작자님의 이력과 간단한 소개를 써 주세요.',
            inputComponent: <CreatorIntroduce />,
          },
        ],
      },
    ],
  },
  {
    pageTitle: '펀딩 및 선물 구성',
    categories: [
      {
        id: 1,
        title: '펀딩 목표 설정',
        contents: [
          {
            id: 1,
            title: '목표 금액',
            requiredText: '목표 금액을 입력해주세요',
            description: `이번 프로젝트를 통해 모으고자 하는 펀딩 목표 금액이 얼마인가요? \n 마감일 자정까지 목표 금액을 100% 이상 달성하셔야만 모인 후원금이 결제 됩니다. \n 막판에 후원을 취소하는 후원자들도 있는 점을 감안해 10% 이상 초과 달성을 목표로 하시는게 안전합니다. \n (목표 금액은 제작비, 선물 배송비, 창작자의 인건비, 예비 비용 등을 고려하시기 바랍니다.)`,
            inputComponent: <GoalAmount />,
          },
        ],
      },
      {
        id: 2,
        title: '펀딩 기간 설정',
        contents: [
          {
            id: 1,
            title: '프로젝트 공개일시',
            requiredText: '프로젝트 공개일시를 입력해주세요',
            description:
              '설정하신 일시에 프로젝트가 자동으로 공개되니 신중하게 정해주세요. \n  설정하신 공개일시와 관계없이 프로젝트를 직접 공개하실 수도 있습니다. \n 프로젝트 공개일시는 설정하신 프로젝트 마감일로부터 최대 60일 이전까지만 선택하실 수 있습니다.',
            inputComponent: <ProjectOpenDate />,
          },
          {
            id: 2,
            title: '프로젝트 마감일',
            requiredText: '프로젝트 마감일을 입력해주세요',
            description:
              '프로젝트는 최대 60일 동안 진행하실 수 있고 마감일 자정에 종료됩니다. \n 이미 선물을 만드셨다면, 선물 실행일 중에 마감일보다 이른 날짜가 있지 않은지 꼭 확인해주세요.',
            inputComponent: <ProjectDueDate />,
          },
        ],
      },
      {
        id: 3,
        title: '선물 구성',
        contents: [
          {
            id: 1,
            title: '선물 추가하기',
            requiredText: '선물을 만들기 전에 프로젝트 마감일을 설정해주세요',
            description:
              '후원자 분들에게 드릴 선물 내용을 입력해주세요. \n 1,000원은 따로 설정하지 않아도 기본으로 설정됩니다.',
            inputComponent: <AddReward />,
          },
        ],
      },
    ],
  },
];

export default PROJECT_START_DATA;
