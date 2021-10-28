import MotionHoc from "./MotionHoc";
import "./PageStyles.css";

const VacanciesComponent = () => {
    return <h1 id="TempH1">Vacancies</h1>;   
};

const Vacancies = MotionHoc(VacanciesComponent);

export default Vacancies;
