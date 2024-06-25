![Project Logo](https://raw.githubusercontent.com/IPHUN1989/bytebattlers/development/frontend/src/assets/wallpaper/Byte_Battlers.png)

![GitHub repo size](https://img.shields.io/github/repo-size/IPHUN1989/bytebattlers)
![GitHub language count](https://img.shields.io/github/languages/count/IPHUN1989/bytebattlers)
![Static Badge](https://img.shields.io/badge/total%20number%20of%20tracked%20files-113-blue)
![GitHub contributors](https://img.shields.io/github/contributors/IPHUN1989/bytebattlers)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/IPHUN1989/bytebattlers?label=total%20commits)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/IPHUN1989/bytebattlers?label=monthly%20commits)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/IPHUN1989/bytebattlers/development)
![GitHub closed issues](https://img.shields.io/github/issues-closed/IPHUN1989/bytebattlers)
![GitHub issues](https://img.shields.io/github/issues-raw/IPHUN1989/bytebattlers)
![GitHub pull requests](https://img.shields.io/github/issues-pr/IPHUN1989/bytebattlers)


# Information about the migration of the project

**The original project has been cloned with permission to here and its development continues here from 22-05-2024.**
**You can find the original repo here: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-szplkflrn**

# ByteBattlers
**A full stack CRUD web application with the following technologies:**
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/frameworks/react.svg" alt="drawing" width="30" align="center"/> *React* 
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/programming%20languages/javascript.svg" alt="drawing" width="30" align="center"/> *JavaScript*
-  <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/frameworks/spring.svg" alt="drawing" width="30" align="center"/> *Spring*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/programming%20languages/java.svg" alt="drawing" width="30" align="center"/> *Java* 
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/databases/postgresql.svg" alt="drawing" width="30" align="center"/> *PostgreSQL*

# Background
**A BoardgameGeek inspired web application where users can:**
- *Search for board games*
- *Register themselves securely*
- *Add a board game to their virtual collection*
- *Rate/review any chosen board game*

# Usage

- Rename the teamplate_env file in the ${local_folder_of_cloned_project} to .env and fill out the requested variables

##  Running it with Docker

```bash
# Navigate to the local folder
docker-compose up
```
- *Visit the dockerized website on localhost:3456*

## Local build

### Prerequisites
- <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg" alt="drawing" width="30" align="center"/> *Maven 3.6.3*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/frameworks/nodejs.svg" alt="drawing" width="30" align="center"/> *Node 19.8.1*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/programming%20languages/java.svg" alt="drawing" width="30" align="center"/> *Java 17.0.7*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/others/npm.svg" alt="drawing" width="30" align="center"/> *NPM 9.5.1*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/databases/postgresql.svg" alt="drawing" width="30" align="center"/> *PostgreSQL 12.16*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/others/git.svg" alt="drawing" width="30" align="center"/> *Git 2.30.2*

### Database

**With a filled up database:**
*Create an empty database and run the query in the db/import.sql to initialize a dummy database with already existing data*

**With an empty database:**
*Create an empty database and run the query in the backend/src/main/resources/db/migration/init-schema.sql to initialize a database with only the schema*

### Frontend 

- *Run the following command*

```bash
# Run it in the main folder.
# Important to include the dot at the beggining of the command
. frontend.sh

```

### Backend

- *Run the following command*

```bash
# Run it in the main folder in a new terminal
# Important to include the dot at the beggining of the command
. backend.sh

```
- *After succesful build you can visit the website on localhost:4173*



# See also
[Checkout the documentation of our project](https://iphun1989.github.io/bytebattlers/)

