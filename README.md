# TestTaskReact

[Deploy](https://uzuzer567.github.io/test-task-react/)

Разработать компонент таблицы, с несколькими столбцами. Столбцы должны включать в себя имя, дату, числовое значение, а так же колонку с действиями. Над таблицей должна быть кнопка "Добавить", вызывающая модальное окно с набором полей соответствующих столбцам в таблице. После заполнения и валидации данных полей в таблицу должна добавляться строка с ними. В ячейке колонки "Действия" должны быть кнопки "удалить" и "редактировать" (можете обозначать их иконками). Нажатие на кнопку "редактировать" вновь вызывает модальное окно, заполненное данными из строки и при изменении и подтверждении в модальном окне меняет данные в соответствующей строке. Нажатие на кнопку "удалить" - убирает данную строку из таблицы. Для выполнения тестового задания необходимо выполнить все требования выше, при этом есть дополнительные пожелания, которые будут плюсом при рассмотрении кандидатов: использовать библиотеку AntD, реализовать с её помощью сортировку по всем колонкам, которая будет правильно работать в зависимости от типа значения в колонке; если решите не использовать AntD, можете поработать над собственной версткой, добавить плавных анимаций для модального окна, подумать над адаптивом; реализовать поиск по всем ячейкам таблицы. Инпут для поиска расположить над таблицей. При выполнении задания разрешается пользоваться библиотекой AntD (при условии выполнения дополнительных требований), а так же вспомогательных библиотек по типу lodash.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
