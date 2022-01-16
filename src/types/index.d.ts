type Post = {
  id: string,
  contents: string,
  creatorId: string,
  creatorName: string,
  createdAt: number,
}

type User = {
  uid: string,
  displayName?: string,
};