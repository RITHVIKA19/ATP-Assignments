
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
const copiedUser = { ...user };
copiedUser.name = "Kiran";                     
copiedUser.preferences.theme = "light";        
console.log("Original:", user);
console.log("Copied:", copiedUser);