interface TitleAndDescriptionProps {
  /**
   * The title
   */
  title: string;
  /**
   * The description or content
   */
  description: string;
}

export function TitleAndDescription({ title, description }: TitleAndDescriptionProps) {
  return (
    <>
      <div className="font-bold mb-12">{title}</div>
      <div className="font-medium">{description}</div>
    </>
  );
}
