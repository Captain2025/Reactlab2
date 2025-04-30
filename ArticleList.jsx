//  Tailwind используется для стилизации элементов через классы

/**
 * Компонент ArticleList.
 * Отображает список статей в виде маркированного списка с использованием классов Tailwind CSS для стилизации.
 * 
 * @returns {JSX.Element} Компонент, отображающий список статей.
 */
const ArticleList = () => {
  const articles = ["Статья 1", "Статья 2", "Статья 3"];

  return (
    <section className="p-5">
      <h2 className="text-blue-500 text-xl font-semibold">Список статей</h2>
      <ul className="list-disc pl-5 mt-3">
        {articles.map((article, index) => (
          <li key={index} className="mb-2 text-gray-700">
            {article}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticleList;