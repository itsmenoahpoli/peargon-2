document.addEventListener("DOMContentLoaded", () => {
  const countDisplay = document.getElementById("count");
  const incrementBtn = document.getElementById("incrementBtn");

  const updateCount = async () => {
    try {
      const response = await fetch("/api/count");
      const data = await response.json();
      countDisplay.textContent = data.count;
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  incrementBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("/api/increment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: 1 }),
      });
      const data = await response.json();
      countDisplay.textContent = data.count;
    } catch (error) {
      console.error("Error incrementing count:", error);
    }
  });

  updateCount();
});
