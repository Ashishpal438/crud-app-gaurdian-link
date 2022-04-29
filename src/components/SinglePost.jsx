import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './post.css'
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { deletePost, editPost } from '../redux/posts/actions';

const SinglePost = ({ post }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalVisible(true);

  };

  const handleOk = (id) => {
    setIsModalVisible(false);
    dispatch(editPost({ id: id, text: text }))
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const handleDelete = (id) => {
    dispatch(deletePost(id))
  }

  return (
    <div key={post.id} className="post-container">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => {
        setText(post.title)
        showModal()
      }}>Edit</button>

      <Modal
        title="Edit Post"
        visible={isModalVisible}
        onOk={() => handleOk(post.id)}
        onCancel={handleCancel}>
        <input type="text" value={text} placeholder='Enter post' onChange={(e) => setText(e.target.value)} />
      </Modal>
      <button onClick={() => handleDelete(post.id)} >Delete</button>
    </div>
  )
}

export default SinglePost