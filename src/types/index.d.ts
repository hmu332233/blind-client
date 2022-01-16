type Post = {
  id: string,
  contents: string,
  creatorId: string,
  creatorName: string,
  createdAt: number,
}

type User = {
  id: string,
  displayName?: string,
};