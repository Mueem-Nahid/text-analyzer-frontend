import {useParams} from "react-router-dom";
import {
  useLazyCountCharactersQuery,
  useLazyCountParagraphsQuery,
  useLazyCountSentencesQuery,
  useLazyCountWordsQuery,
  useLazyGetFullReportQuery,
  useLazyGetLongestWordsQuery,
  useSingleTextQuery
} from "../redux/features/analyzer/analyzerApi.ts";
import Spinner from "../components/Spinner.tsx";

const AnalyzePage = () => {
  const {id} = useParams();
  const {data, isLoading} = useSingleTextQuery(id!);

  const [triggerCountWords, {data: countWordsData}] = useLazyCountWordsQuery();
  const [triggerCountCharacters, {data: countCharactersData}] = useLazyCountCharactersQuery();
  const [triggerCountParagraphs, {data: countParagraphsData}] = useLazyCountParagraphsQuery();
  const [triggerGetLongestWords, {data: longestWordsData}] = useLazyGetLongestWordsQuery();
  const [triggerCountSentences, {data: countSentencesData}] = useLazyCountSentencesQuery();
  const [triggerFullReport, {data: fullReportData, isLoading: isReportLoading}] = useLazyGetFullReportQuery();

  const handleAnalysis = (analysisType: string) => {
    switch (analysisType) {
      case 'words':
        return triggerCountWords(id!);
      case 'characters':
        return triggerCountCharacters(id!);
      case 'paragraphs':
        return triggerCountParagraphs(id!);
      case 'sentences':
        return triggerCountSentences(id!);
      case 'longestWords':
        return triggerGetLongestWords(id!);
      case 'fullReport':
        return triggerFullReport(id!);
      default:
        return null;
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"/>
      <div
        className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"/>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-center text-2xl font-extrabold text-blue-500">Text Analysis</h2>
        {
          isLoading ?
            <div>Loading...</div>
            :
            <figure className="mt-10">
              <blockquote
                className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “{data?.data?.text}”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <span
                    onClick={() => handleAnalysis('words')}
                    className="cursor-pointer bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Count Words
                  </span>
                  <span
                    onClick={() => handleAnalysis('characters')}
                    className="cursor-pointer bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    Count Characters
                  </span>
                  <span
                    onClick={() => handleAnalysis('paragraphs')}
                    className="cursor-pointer bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                    Count Paragraphs
                  </span>
                  <span
                    onClick={() => handleAnalysis('sentences')}
                    className="cursor-pointer bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                    Count Sentences
                  </span>
                  <span
                    onClick={() => handleAnalysis('longestWords')}
                    className="cursor-pointer bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                    Get Longest Words
                  </span>
                </div>
              </figcaption>
            </figure>
        }
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-4">
            {
              countWordsData?.data &&
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">Word Counts</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {countWordsData?.data?.count}
                    </dd>
                </div>
            }

            {
              countCharactersData?.data &&
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">Character Counts</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {countCharactersData?.data?.count}
                    </dd>
                </div>
            }

            {
              countParagraphsData?.data &&
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">Paragraph Counts</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {countParagraphsData?.data?.count}
                    </dd>
                </div>
            }

            {
              countSentencesData?.data &&
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">Sentence Counts</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {countSentencesData?.data?.count}
                    </dd>
                </div>
            }
          </dl>
          {
            longestWordsData?.data && longestWordsData?.data?.longestWords &&
              <div className="mt-16 mx-auto flex max-w-xs flex-col gap-y-4 justify-center items-center">
                  <h2 className="text-base leading-7 text-gray-600">Longest words:</h2>
                  <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside dark:text-gray-600">
                    {
                      longestWordsData?.data?.longestWords.map((word: string, i: string) => (
                        <li key={i}>
                          {word}
                        </li>
                      ))
                    }
                  </ul>
              </div>
          }
        </div>

        <div className="mt-20 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center items-center">
          <button
            className="mb-5 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            onClick={() => handleAnalysis('fullReport')}
          >
            {
              isReportLoading ? <Spinner w={4} h={4}/> : "View full report"
            }
          </button>
          {
            fullReportData?.data &&
              <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside dark:text-gray-600">
                  <li>Words: {fullReportData?.data?.words}</li>
                  <li>Characters: {fullReportData?.data?.characters}</li>
                  <li>Paragraphs: {fullReportData?.data?.paragraphs}</li>
                  <li>Sentences: {fullReportData?.data?.sentences}</li>
                  <li>
                      Longest words:
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        {
                          fullReportData?.data?.longestWords.map((word: string, i: string) => (
                            <li key={i}>{word}</li>
                          ))
                        }
                      </ol>
                  </li>
              </ul>
          }
        </div>
      </div>
    </section>
  );
};

export default AnalyzePage;