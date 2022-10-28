import { useEffect } from 'react';
import './UI.css';
import person from './person-1.jpeg';

const imageSize = {
    width: "50%",
    height: "80%"
}
function Reviews() {
    useEffect(() => {
        // vanilla JS go here
        // 01- load data
        const reviews = [
            {
              id: 1,
              name: "susan smith",
              job: "web developer",
              img:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
              text:
                "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
            },
            {
              id: 2,
              name: "anna johnson",
              job: "web designer",
              img:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
              text:
                "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
            },
            {
              id: 3,
              name: "peter jones",
              job: "intern",
              img:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
              text:
                "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
            },
            {
              id: 4,
              name: "bill anderson",
              job: "the boss",
              img:
                "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
              text:
                "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
            },
          ];

          // 02- select target
           const img = document.getElementById("person-img");
           const author = document.getElementById("author");
           const job = document.getElementById("job");
           const info = document.getElementById("info");

           const prevBtn = document.querySelector(".prev-btn");
           const nextBtn = document.querySelector(".next-btn");
           const randomBtn = document.querySelector(".random-btn");

           // write logic 
           // set start item
           let currentItem = 0;

           // load innital item for one person
           window.addEventListener("DOMContentLoaded", function() {
                const item = reviews[currentItem];
                img.src = item.img;
                author.textContent = item.name;
                job.textContent = item.job;
                info.textContent = item.text;
           });

           // show person based on item (function based on the order of person in list)
            function showPerson(person) {
                const item = reviews[person];
                img.src = item.img;
                author.textContent = item.name;
                job.textContent = item.job;
                info.textContent = item.text;
            }

            // nextBtn
            nextBtn.addEventListener('click',function(){
                currentItem++;
                if(currentItem > reviews.length - 1) {
                    currentItem = 0;
                }
                // update the number and show
                showPerson(currentItem);
            })

            prevBtn.addEventListener('click', function(){
                currentItem--;
                if(currentItem < 0) {
                    currentItem = reviews.length -1;
                }
                // update the number and show
                showPerson(currentItem);
            })

            randomBtn.addEventListener("click", function () {
                currentItem = Math.floor(Math.random() * reviews.length);
                showPerson(currentItem);
            });
            
    },[]);

    return (
      <>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>

          <article className="review">
            <div className="img-container">
              <img style={imageSize} src={person} id="person-img" alt="" />
            </div>
            <h4 id="author">sara jones</h4>
            <p id="job">UX Designer</p>
            <p id="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              asperiores debitis incidunt, eius earum ipsam cupiditate libero?
              Iste, doloremque nihil?
            </p>

            <div className="button-container">
              <button className="prev-btn">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="next-btn">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <button className="random-btn">surprise me(random)</button>
          </article>
        </section>
      </>
    );
}

export default Reviews