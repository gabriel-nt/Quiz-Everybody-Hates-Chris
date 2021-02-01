interface IQuestion {
  image: string;
  title: string;
  description: string;
  answer: number;
  alternatives: string[];
}

interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    mainBg: string;
    contrastText: string;
    wrong: string;
    success: string;
  };
  borderRadius: string;
}

export default interface IDatabase {
  bg: string;
  questions: IQuestion[];
  theme: ITheme;
}
