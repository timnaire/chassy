interface AppStudyProps {
  title: string;
  description: string;
  image: string;
}

export function AppStudy({ title, description, image }: AppStudyProps) {
  return (
    <div className="container mx-auto md:px-64">
      <div className="grid grid-cols-2">
        <h1 className="text-xl md:text-5xl lg:text-7xl">{title}</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ab deserunt praesentium, commodi, illo saepe doloremque officiis iste consectetur aspernatur asperiores fuga incidunt. Quis ducimus at quam quod facilis eaque.
        </div>
        <div className="flex justify-center self-center">
          image here
        </div>
      </div>
    </div>
  );
}
