 const searchInput = document.getElementById('searchInput');
 const resultsContainer = document.getElementById('resultsContainer');
 const resultsList = document.getElementById('resultsList');
 const contentSections = document.querySelectorAll('.content');
 
 searchInput.addEventListener('input', () => {
     const searchQuery = searchInput.value.toLowerCase();
     const matchingSections = [];
 
     contentSections.forEach((section) => {
         const sectionText = section.textContent.toLowerCase();
 
         if (sectionText.includes(searchQuery)) {
             matchingSections.push(section);
         }
     });
 
     if (matchingSections.length > 0) {
         resultsList.innerHTML = '';
         matchingSections.forEach((section) => {
             section.style.display = 'block';
             const li = document.createElement('li');
             //We can also create a result list by using appendchild function or say method -- I have written below// 
            li.textContent = section.querySelector('h2').textContent;
              // this makes to search the content fast 
             resultsList.appendChild(li);    
         });
     } else {
         resultsList.innerHTML = '';
         contentSections.forEach((section) => {
             section.style.display = 'none';
         });
 
         if (searchQuery.trim() !== '') {
             const noResultsMessage = document.createElement('li');
             noResultsMessage.textContent = 'Sorry, no results found. Please search again.';
             resultsList.appendChild(noResultsMessage);
         }
     }
 });

