export default interface PostDetail {
    id: string,
    text: string,
    image: string,
    likes: string,
    owner: Author,
    publishDate: string,
    tags: string[],
};

interface Author {
    id: string,
    firstName: string,
    lastName: string,
    picture: string,
}