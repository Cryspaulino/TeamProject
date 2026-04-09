const activities = [
    {
        title: "Movie Bingo",
        description: "Check off clichés like 'dramatic rain' or 'slow clap'.",
        image: "https://i.etsystatic.com/24428404/r/il/69c6e5/2939756968/il_1588xN.2939756968_4q8j.jpg"
    },
    {
        title: "Snack Challenge",
        description: "Try a new snack combo during the movie.",
        image: "https://pizzazzerie.com/wp-content/uploads/2021/06/movie-night-snacks-board-1057x1536.jpg"
    },
    {
        title: "Quote Along",
        description: "Repeat iconic lines with the characters.",
        image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
    },
    {
        title: "No Phone Challenge",
        description: "Put your phone away the whole movie.",
        image: "https://readingmytealeaves.com/wp-content/uploads/2018/07/phone_storage_reading_my_tea_leaves_IMG_8757.jpg"
    },
    {
        title: "Rate Every Scene",
        description: "Give each scene a score out of 10.",
        image: "https://www.fynzo.com/wp-content/uploads/2022/10/rating-scale-1024x576.png"
    }
];

function getRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    return activities[randomIndex];
};

document.getElementById("random-activity-btn").addEventListener("click", () => {
    const activity = getRandomActivity();

    document.getElementById("activity-title").textContent =
        `Your activity of the day is...
        ${activity.title}!`;
        
        document.getElementById("activity-image").src = activity.image;

        document.getElementById("activity-text").textContent =
        `${activity.description}`;

    document.getElementById("activity-modal").style.display = "block";
});

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("activity-modal").style.display = "none";
});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("activity-modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

