export type UserState = {
    name: string,
    fetchUser: (id: number) => Promise<void>,
    clearUser: () => void
}

export type UsersState = {
  users: [],

  fetchUsers: () => Promise<void>;
};

export type PostsState = {
    posts: [],
    fetchPosts: () => void;
}

export type PostState = {
    post: {
        id: number,
        title: string,
        body: string
    },
    fetchPost: (id: number) => Promise<void>,
    clearPost: () => void
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

export type IdProps = {
    id: number
}



export type User = {
    name: string;
    email: string;
    id: number;
  };
