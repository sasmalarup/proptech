import React,{useState,useEffect} from 'react'
import BlogCard from '../../molecules/blogCard/index';
import { getBlog } from '@/lib/getBlog';
import { useSelector } from 'react-redux';
const Blog = () => {
    const [blogs,setBlog]=useState([]);
    const [isLoading,setLoading]=useState(false)
    const seller_id=useSelector(state=>state.globalReducer.value.storeID)
 useEffect(()=>{
    const blogRes=async ()=>{
        setLoading(true)
        const res=await getBlog(seller_id,4,'blogs');
        setBlog(res)
        setLoading(false)
    }
    blogRes()
 },[seller_id]) 

  return (
    <>
      <div className='propertyWhiteBg'>
        <div className="container mt-5 mb-5 propertyAreaContainer">
          <div className='featureTitle'>
            <h2 className='mb-4'>Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div className='row gy-1 mt-5'>
            {blogs?.length>0 && blogs.map((blog)=><BlogCard blog={blog}/>)}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
