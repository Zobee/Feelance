import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

const Home = () => {
    return (
        <div>
        <div className='home-card'>
            <Card bg='dark' style={{height: '10%'}}>
                <Card.Img className='img img-fluid img-responsive' style={{height : '65vh'}} src='write.jpg' alt=''></Card.Img>
                <Card.ImgOverlay>
                    <Card.Title><h1>Hey! I'm Zoheb</h1></Card.Title>
                    <Card.Subtitle><h4>I put dreams to paper</h4></Card.Subtitle>
                    <Card.Text style={{width:'50%', marginTop: '1em', fontSize:'2vw', wordWrap: 'break-word', textIndent: '0.5em'}}>
                    'On paper' is a phrase commonly used to denigrate an idea which seems great in theory,
                    but doesn't quite hold up to scrutiny in practice. My mission is to prove just how antiquated
                    that thought process is. Whether your needs are technical, creative, or copywriting-based, 
                    I'm certain that my 'on paper' work will provide an elegant solution to your business'
                    needs.</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div className='container-fluid'>

            <h4 className='mt-4 mb-1 text-center'>
                Check out some of my work! 
                <br/>
                <br/>
                <Link className='text-white' to='samples'><div className='btn btn-dark'>Writing Samples</div></Link>
            </h4>

            <h4 className='mt-4 mb-1 text-center'>
                I'd love to hear from you. 
                <br/>
                <br/>
                <Link to='contact'><div className='btn btn-dark'>Get in touch!</div></Link>
            </h4>    
        </div>
        </div>
    )
}

export default Home