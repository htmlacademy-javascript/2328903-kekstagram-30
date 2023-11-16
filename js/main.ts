interface MyComment {
  id: number;
  avatar: string;
  message: string;
  name: string;
}

interface MyPhoto {
  id: number;
  url: string;
  description: string;
  likes: number;
  comments: MyComment[];
}

interface PhotosArray extends Array<MyPhoto> {}

const names: string[] = [
  'Алексей',
  'Елена',
  'Иван',
  'Ольга',
  'Дмитрий',
  'Анна',
];

const sentences: string[] = [
  'Топчик!',
  'Такая красивая фотография, что немного закапал слюной клавиатуру.',
  'Говорят, что ангелов нельзя сфотографировать. Как тебе это удалось?',
  'Ты умеешь удивлять! Каждый кадр поражает жизнелюбием и обаянием. Твоя внешность – магнит для любого объектива.',
  'Какое милое лицо интеллигентного человека! Блеск глаз виден даже на фото. Благородство черт поражает! Вы, наверное, снимаетесь в кино?',
  'При взгляде на твое фото я вспоминаю все прекрасное, что есть на свете — сияющее солнце и беспокойное море, блеск звезд и бурные водопады. Так ты меня вдохновляешь своим притягательным образом!',
];

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomAuthorName(): string {
  const randomIndex: number = getRandomNumber(0, names.length - 1);
  return names[randomIndex];
}

function getRandomCommentMessage(): string {
  const randomIndex: number = getRandomNumber(0, sentences.length - 1);
  return sentences[randomIndex];
}

function createComment(): MyComment {
  return {
    id: getRandomNumber(1, 1000),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomCommentMessage(),
    name: getRandomAuthorName(),
  };
}

function createPhoto(id: number): MyPhoto {
  const commentsCount: number = getRandomNumber(0, 30);
  const comments: MyComment[] = Array.from(
    { length: commentsCount },
    createComment
  );

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomNumber(15, 200),
    comments: comments,
  };
}

function generatePhotosArray(length: number = 25): PhotosArray {
  return Array.from({ length }, (_, index) => createPhoto(index + 1));
}

const photos: PhotosArray = generatePhotosArray();

console.log(photos);

export {
  getRandomNumber,
  getRandomAuthorName,
  getRandomCommentMessage,
  createComment,
  createPhoto,
  generatePhotosArray,
  names,
  sentences,
};
