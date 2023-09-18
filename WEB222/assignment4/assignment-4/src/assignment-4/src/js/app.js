/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Sojung Han
 *      Student ID: 121532220
 *      Date:       23rd July, 2023
 */

const { artists, songs } = window;
function createArtistButtons() {
  const menu = document.getElementById("menu");

  artists.forEach((artist) => {
    const button = document.createElement("button");
    button.textContent = artist.name;
    button.addEventListener("click", () => showArtistInfo(artist));
    menu.appendChild(button);
  });
}

// Function to show the selected artist's information and songs
function showArtistInfo(artist) {
  const artistTitle = document.getElementById("artist");
  const songsTableBody = document.getElementById("songs");

  // Update the selected artist's information
  artistTitle.textContent = artist.name;
  // Clear the current rows from the table
  songsTableBody.innerHTML = "";

  const filteredSongs = songs.filter((song) => song.artistId === artist.id && !song.flagged);
  const linksContainer = document.createElement("div");
  linksContainer.classList.add("links-container");
/************* */
  artist.links.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.textContent = link.name;
    linkElement.target = "_blank"; // Open links in a new tab
    linksContainer.appendChild(linkElement);
  });

/************* */
  // Append the links container to the artist title
  artistTitle.appendChild(linksContainer);

  // Loop through the filtered songs and add them to the table
  filteredSongs.forEach((song) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const yearCell = document.createElement("td");
    const durationCell = document.createElement("td");

    // Add a click handler to the row to log the song when clicked
    row.addEventListener("click", () => console.log(song));

    nameCell.textContent = song.title;
    yearCell.textContent = song.year;
    durationCell.textContent = song.duration;

    row.appendChild(nameCell);
    row.appendChild(yearCell);
    row.appendChild(durationCell);

    songsTableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createArtistButtons();
  showArtistInfo(artists[0]);
});

console.log({ artists, songs }, "App Data");
