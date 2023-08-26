import Header from "@/components/header"
import Posts from "@/components/posts"
export default function Profile() {
    const posts = [{

        photo: "/images/main1.jpg" 
    }, 
    {
        photo: "/images/main2.jpg" 
    },
    {
        photo: "/images/main3.jpg" 
    },
    {
        photo: "/images/main4.jpg" 
    },
    {
        photo: "/images/main5.jpg"        
    },
    {
        photo: "/images/main6.jpg"
    }]
    
  return (
    <main>
    <Header />
        <div className="profile container profile-container">
            <div className="profile-left">
                <img src="/images/profile.jpg"/>
            </div>
            <div className="profile-right">
                <div className="profile-name">
                    <h2>terrylucas</h2>
                    <button>follow</button>
                    <img src="/images/dots.jpg"/>
                </div>
                <div className="profile-stats">
                    <p>1.258 posts</p>
                    <p>4M followers</p>
                    <p>1.250 following</p>
                </div>
                <div className="profile-info">
                    <p>Terry Lucas</p>
                </div>
            </div>
        </div>
        <Posts posts={posts} />
    </main>
  )
}
