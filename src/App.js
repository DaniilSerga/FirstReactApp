import React, { useState, useRef } from "react";
import './styles/App.css';
import PostList from './Components/PostList';
import Button from './Components/UI/button/MyButton';
import Input from './Components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description 1'},
        {id: 2, title: 'JavaScript 2', body: 'Description 2'},
        {id: 3, title: 'JavaScript 3', body: 'Description 3'},
    ]);

    const [post, setPost] = useState({
        title: '',
        body: ''
    });

    const addNewPost = (e) => {
        // Предлотвращение работы кнопки *по умолчанию*, перезагружая страницу при нажатии на неё
        e.preventDefault();

        // const newPost = {
        //     title,
        //     body,
        // }

        // console.log(newPost);

        // Добавление нового поста
        setPosts([...posts, post]);
        setPost({title: '', body: ''}); // тоже очистка инпутов

        // Очистка инпутов
        // setPost.title('');
        // setPost.body('');

        // Получение данных с помощью useState
        // console.log(title);
        // console.log(body);

        // Получение данных с помощью useRef:
        // console.log(bodyInputRef.current.value);
    }

    return (
        <div className="App">
            <form>
                {/* Управляемый элемент */}
                <Input 
                    type='text' 
                    onChange={e => setPost({...post, title: e.target.value})}
                    placeholder='Название'
                    value={post.title}/>
                <Input 
                    type="text"
                    onChange={e => setPost({...post, body: e.target.value})}
                    placeholder='Содержание'
                    value={post.body}/>
                    
                {/* Неуправляемый (неконтроллируемый) элемент */}
                {/* <Input 
                    ref={bodyInputRef}
                    type='text' 
                    placeholder='Описание'/> */}
                <Button onClick={addNewPost} text='Создать пост'/>
            </form>
            <PostList posts={posts} title={'Посты про JS'}/>
        </div>
    );
}

export default App;
