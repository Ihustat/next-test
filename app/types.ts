export type UserState = {
    name: string,
    fetchUser: (id: number) => Promise<void>;
}

export type UsersState = {
  users: [];
  fetchUsers: () => Promise<void>;
};

export type PostsState = {
    posts: [],
    fetchPosts: () => Promise<void>;
}

export type PostState = {
    post: {
        id: number,
        title: string,
        body: string
    },
    fetchPost: (id: number) => Promise<void>;
}

export type Props = {
    params: {
        id: string
    }
}

export type Post = {
    id: number,
    title: string
}
