// สำหรับ Hamburger Menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');

    navLinks.classList.toggle('active'); // Toggle คลาส active

    // เปลี่ยนไอคอนระหว่าง Hamburger และ Close
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-times'); // เปลี่ยนเป็นไอคอนปิด
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars'); // เปลี่ยนกลับเป็น Hamburger
    }
});
