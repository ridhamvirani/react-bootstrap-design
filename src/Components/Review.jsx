import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function Review(props) {
    return (
        <>
            <div className="review-slider">
                <Container>
                    <Carousel className='px-5'>
                        {
                            props.reviews.map((item) => {
                                return (
                                    <Carousel.Item>
                                        <div className="item">
                                            <h1 className='oswald fw-light text-center'>{item.same}</h1>
                                            <p className='text-center my-4'>{item.feedback}</p>
                                            <p className='text-center'>{item.feedbacker}</p>
                                        </div>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </Container>
            </div>
        </>
    );
}
export default Review;