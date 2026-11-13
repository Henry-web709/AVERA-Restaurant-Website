
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const feedback = document.getElementById("contactFeedback");

        if (!name || !email || !subject || !message) {
            feedback.textContent = "Please complete all fields.";
            feedback.style.color = "red";
            return;
        }

        feedback.textContent = "Thank you, " + name + "! Your message has been received.";
        feedback.style.color = "green";

        contactForm.reset();
    });
}

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {
    const bookingDate = document.getElementById("bookingDate");

    if (bookingDate) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        bookingDate.min = `${year}-${month}-${day}`;
    }

    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("guestName").value.trim();
        const email = document.getElementById("guestEmail").value.trim();
        const phone = document.getElementById("guestPhone").value.trim();
        const date = document.getElementById("bookingDate").value;
        const time = document.getElementById("bookingTime").value;
        const guests = document.getElementById("guestNumber").value;
        const requests = document.getElementById("specialRequest").value.trim();

        if (!name || !email || !phone || !date || !time || !guests) {
            alert("Please complete all required reservation details.");
            return;
        }

        const selectedDate = new Date(date + "T00:00:00");
        const currentDate = new Date();

        currentDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) {
            alert("Please select a valid reservation date.");
            return;
        }

        alert(
            "Thank you, " + name + "!\n\n" +
            "Your reservation request has been received.\n\n" +
            "Date: " + date + "\n" +
            "Time: " + time + "\n" +
            "Guests: " + guests + "\n\n" +
            "We look forward to welcoming you to AVERA!"
        );

        reservationForm.reset();
    });
}

const currentYear = document.querySelector(".footer-bottom p");

if (currentYear) {
    currentYear.innerHTML =
        "&copy; " + new Date().getFullYear() +
        " AVERA Restaurant. All Rights Reserved.";
}
