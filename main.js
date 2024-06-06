//Slider Testimonials
const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");
const box = document.querySelector(".box");

nextBtn.onclick = () => {
    document.querySelector(".box-container").scrollLeft += 400;
};

backBtn.onclick = () => {
    document.querySelector(".box-container").scrollLeft -= 400;
};