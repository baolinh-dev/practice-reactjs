import ToDoList from "../pages/ToDoList";
import CheckRadio from "../pages/CheckRadio";
import Randomgift from "../pages/Randomgift";
import SubmitExample from "../pages/SubmitExample"; 
import CheckInputBox from "../pages/CheckInputBox"; 
import ChangeTitle from "../pages/ChangeTitle";
import ToggleFetchAPI from "../pages/ToggleFetchAPI"; 
import PreviewImage from "../pages/PreviewImage";

const publicRoutes = [
  {
    path: "/todolist",
    element: ToDoList,
  },
  {
    path: "/checkradio",
    element: CheckRadio,
  },
  {
    path: "/radomgift",
    element: Randomgift,
  }, 
  {
    path: "/submitexample",
    element: SubmitExample,
  }, 
  {
    path: "/checkinputbox",
    element: CheckInputBox,
  }, 
  {
    path: "/changetitle",
    element: ChangeTitle,
  }, 
  {
    path: "/togglefetchapi",
    element: ToggleFetchAPI,
  },   
  {
    path: "/previewimage",
    element: PreviewImage,
  },
];

export { publicRoutes };
