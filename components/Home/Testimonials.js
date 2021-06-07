import React, { Component } from 'react';
import TestimonialItem from './TestimonialItem';
import { data } from './TestimonialData';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 1,
      testimonialData: data,
    };
  }

  componentDidMount() {
    let firstItemClone = this.testimonialContainer.children[0].cloneNode(true);

    let lastItemClone = this.testimonialContainer.children[
      this.testimonialContainer.children.length - 1
    ].cloneNode(true);

    this.testimonialContainer.insertBefore(
      lastItemClone,
      this.testimonialContainer.children[0]
    );

    this.testimonialContainer.append(firstItemClone);

    this.testimonialContainer.style.transform = `translate(-${100}%)`;

    this.timerId = setInterval(() => {
      this.handleNext();
    }, 12000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleNext = () => {
    if (
      this.state.currentItem <
      this.testimonialContainer.children.length - 1
    ) {
      this.setState({ currentItem: this.state.currentItem + 1 }, () => {
        this.testimonialContainer.style.transform = `translate(-${
          100 * this.state.currentItem
        }%)`;

        this.testimonialContainer.style.transitionDuration = '0.5s';

        if (
          this.state.currentItem ===
          this.testimonialContainer.children.length - 1
        ) {
          setTimeout(() => {
            this.testimonialContainer.style.transitionDuration = '0s';
            this.testimonialContainer.style.transform = `translate(-${100}%)`;

            this.setState({ currentItem: 1 });
          }, 502);
        }
      });
    } else return;
  };

  handlePrevious = () => {
    if (this.state.currentItem > 0) {
      this.setState({ currentItem: this.state.currentItem - 1 }, () => {
        this.testimonialContainer.style.transform = `translate(-${
          100 * this.state.currentItem
        }%)`;

        this.testimonialContainer.style.transitionDuration = '0.5s';

        if (this.state.currentItem === 0) {
          setTimeout(() => {
            this.testimonialContainer.style.transitionDuration = '0s';
            this.testimonialContainer.style.transform = `translate(-${
              100 * (this.testimonialContainer.children.length - 2)
            }%)`;

            this.setState({
              currentItem: this.testimonialContainer.children.length - 2,
            });
          }, 502);
        }
      });
    } else return;
  };

  render() {
    const { testimonialData } = this.state;
    return (
      <section className='py-20 md:py-24 testimonial' id='testimonials'>
        <header className='text-center md:flex md:justify-center md:items-center mb-12'>
          <img
            className='inline-block w-12 md:mr-4'
            src='/assets/media/testimonial.svg'
            alt='testimonial'
          />
          <h2 className='font-bold text-5xl text-white'>From Our Alumni</h2>
        </header>

        <div className='text-white'>
          <div className='carousel-wrapper relative mt-12 overflow-hidden'>
            <div>
              <div className='absolute prev-container z-10 flex justify-center items-center px-8'>
                <button
                  onClick={this.handlePrevious}
                  className='w-12 h-12 bg-royal-blue-500 prev rounded-full cursor-pointer focus:bg-royal-blue-600 hover:bg-royal-blue-400'
                >
                  <span className="sr-only">Previous</span>
                </button>
              </div>
              <div className='absolute next-container z-10 flex justify-center items-center px-8'>
                <button
                  onClick={this.handleNext}
                  className='w-12 h-12 bg-royal-blue-500 next rounded-full cursor-pointer focus:bg-royal-blue-600 hover:bg-royal-blue-400'
                >
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>

            <div
              ref={(ref_id) => (this.testimonialContainer = ref_id)}
              className='flex'
            >
              {testimonialData.map((item) => {
                return <TestimonialItem key={item.name} item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
