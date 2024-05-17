import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <img
        className="not-found-image"
        src="/images/Image not found.png"
        alt="Error 404: page not found"
        height="530"
        width="490"
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
