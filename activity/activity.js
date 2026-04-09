const activities = [
    {
        title: "Movie Bingo",
        description: "Check off clichés like 'dramatic rain' or 'slow clap'.",
        image: "https://images.unsplash.com/photo-1601924928376-3c3b5a2b6d7b"
    },
    {
        title: "Snack Challenge",
        description: "Try a new snack combo during the movie.",
        image: "https://images.unsplash.com/photo-1585238342028-4b0d5f0f6f5e"
    },
    {
        title: "Quote Along",
        description: "Repeat iconic lines with the characters.",
        image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
    },
    {
        title: "No Phone Challenge",
        description: "Put your phone away the whole movie.",
        image: "https://www.gettyimages.in/detail/photo/teenage-girls-and-boys-keeping-mobile-phones-in-royalty-free-image/1241444645"
    },
    {
        title: "Rate Every Scene",
        description: "Give each scene a score out of 10.",
        image: "https://www.pinterest.com/ideas/star-rating/959180437138/"
    }
];

function getRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    return activities[randomIndex];
};

document.getElementById("random-activity-btn").addEventListener("click", () => {
    const activity = getRandomActivity();

    document.getElementById("activity-title").textContent =
        "Your activity of the day";

    document.getElementById("activity-text").textContent =
        `${activity.title} — ${activity.description}`;

    document.getElementById("activity-image").src = activity.image;

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

