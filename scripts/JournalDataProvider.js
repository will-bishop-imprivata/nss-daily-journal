/*
 *   Journal data provider for Daily Journal application
 *    
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 * 
 */
 
// This is the original data


const journal = [
    {
        id: 1,
        date: "09/29/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Happy"
    },
    {
        id: 2,
        date: "9/30/2020",
        concept: "Wireframe and Git Commits",
        entry: "We learned about the importance of planning your project before coding with a wireframe. Git was also introduced.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "10/1/2020",
        concept: "Git and Github",
        entry: "We learned about the significance of having a remote and local versions of your project and how they interact.",
        mood: "Tired"
    }
]

// You export a funciton that provides a version of the raw data in the format that you want

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parsel(currentEntry.date) - Date.parsel(nextEntry.date)
    )
        return sortedByDate
}
