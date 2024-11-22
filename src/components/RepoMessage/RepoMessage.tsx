import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import { Link, Message } from "./RepoMessage.styles";

export type RepoMessageProps = {
  link: string;
};

export const RepoMessage = (props: RepoMessageProps) => {
  const { link } = { ...props };

  return (
    <Message variant="h4">
      Check out the repo on{" "}
      <Link rel="noreferrer" target="_blank" href={link}>
        Github <GitHubIcon />
      </Link>
    </Message>
  );
};

export const DeployedLink = (props: RepoMessageProps) => {
  const { link } = { ...props };

  return (
    <Message variant="h4">
      Check out the project{" "}
      <Link rel="noreferrer" target="_blank" href={link}>
        deployed here.
      </Link>
    </Message>
  );
};
