import i18n, { changeLanguage } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our website!",
          language: "Language",
          greeting: "Hello, User!",
          search: "Search...",
          dashboard: "Dashboard",
          students: "Students",
          student: "Student",
          admin: "Admin",
          grades: "Grades",
          works: "Works",
          settings: "Settings",
          topWorks: "Top Works",
          year: "Year",
          login: "Log In",
          logout: "Log Out",
          name: "Name",
          f_name: "First Name",
          l_name: "Last Name",
          email: "Email adress",
          email_placeholder: "email@example.com",
          email_desc: "Your email is safe with us",
          pass: "Password",
          pass_placeholder: "Enter password",
          pass_placeholder_rp: "Confirm password",
          pass_desc: "Must be 8-20 characters long and contain letters, numbers, and special characters (without spaces or emojis).",
          register: "Register",
          reg_txt1: "Not a member? ",
          reg_txt2: "Or joint with:",
          reg_txt3: "Already a member? ",
          display: "Display",
          footer_txt: "Student Management",
          grade: "Grade",
          grade_ascending: "Ascending grades",
          grade_descending: "Descending grades",
          date: "Date",
          teacher: "Teacher",
          title: "Title",
          author: "Author",
          description: "Description",
          assignments: "Assigments",
          link: "Link",
          sort_by: "Sort by",
          changeTheme: "Change site theme",
          changeLanguage: "Change site language",
          view: "View",
          changeRole: "Change user role",
          searchAndChooseUser: "Search and select user:",
          noUsersFound: "No users found",
          selectRole: "Select Role:",
          currentRole: "Current role for",
          is: "is",
          enterTitle: "Please enter a title.",
          enterDescription: "Please enter description.",
          enterLink: "Enter link to your work.",
          addWork: "Add work",
          placeholderTitle: "Enter title here...",
          placeholderDescription: "Enter description here...",
          placeholderLink: "Start with http:// or with https://",
          add: "Add",
          closeForm: "Close form",
          addForm: "Add new work",
          searchUser: "Search for a user...",
          LoadingUsers: "Loading users...",
          roleUpdatedSuccessfully: "Role successfully changed!",
          update: "Update",
          updateWork: "Update work",
          action: "Action"
        }
      },
      sr: {
        translation: {
          welcome: "Dobrodošli na našu web stranicu!",
          language: "Jezik",
          greeting: "Zdravo, Korisniče!",
          search: "Pretraga...",
          dashboard: "Kontrolna tabla",
          students: "Studenti",
          student: "Student",
          admin: "Administrator",
          grades: "Ocjene",
          grade_ascending: "Rastuce ocjene",
          grade_descending: "Opadajuce ocjene",
          works: "Radovi",
          settings: "Podešavanja",
          topWorks: "Najbolji radovi",
          year: "Godina",
          login: "Prijava",
          logout: "Odjava",
          name: "Ime",
          f_name: "Ime",
          l_name: "Prezime",
          email: "Email adresa",
          email_placeholder: "ime@primjer.com",
          email_desc: "Vasa mejl adresa je sigurna sa nama",
          pass: "Lozinka",
          pass_placeholder: "Unesite lozinku",
          pass_placeholder_rp: "Potvrdite lozinku",
          pass_desc: "Mora da sadrzi 8-20 karaktera, slovo, cifru i specijalni karakter (ne smije da sadrzi razmak ili emotikon)",
          register: "Registracija",
          reg_txt1: "Nemate nalog? ",
          reg_txt2: "ili putem:",
          reg_txt3: "Imate nalog? ",
          display: "Prikaži",
          footer_txt: "Upravljanje studentima",
          gade: "Ocjena",
          date: "Datum",
          teacher: "Profesor",
          title: "Naslov",
          author: "Autor",
          description: "Opis",
          assignments: "Radovi",
          link: "Putanja",
          grade: "Ocjena",
          sort_by: "Sortiraj po",
          changeTheme: "Promijeni temu sajta",
          changeLanguage: "Promijeni jezik sajta",
          view: "Pogledaj",
          changeRole: "Promijeni ulogu korisnika",
          searchAndChooseUser: "Pretraži i izaberi korisnika:",
          noUsersFound: "Nije pronađen korisnik",
          selectRole: "Izaberi ulogu:",
          currentRole: "Trenutna uloga za",
          is: "je",
          enterTitle: "Unesite naslov rada.",
          enterDescription: "Unesite opis rada.",
          enterLink: "Unesite putanju do rada.",
          addWork: "Dodaj rad",
          placeholderTitle: "Unesi naslov ovdje..",
          placeholderDescription: "Unesi opis ovdje...",
          placeholderLink: "Počni sa http:// ili sa https://",
          add: "Dodaj",
          closeForm: "Zatvori",
          addForm: "Dodaj novi rad",
          searchUser: "Pretraži korisnika...",
          LoadingUsers: "Učitavanje korisnika...",
          roleUpdatedSuccessfully: "Uloga je uspješno promijenjena.",
          update: "Ažuriraj",
          updateWork: "Ažuriraj rad",
          action: "Akcija"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
