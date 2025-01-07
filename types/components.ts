
export interface MessageProps {
    id: string;
    text: string;
    receive: boolean;
    author?: string; // Optional prop
  }


export interface UserProps {
  UserID?: string | undefined;
  Username?: string | undefined;
  Email?: string;
  Password?: string;
  chatUserToken?: string;
  };

