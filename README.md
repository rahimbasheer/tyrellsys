
<br>
Below you will find some information on how to configure and run the project for Test 1 and SQL Improvement tips for Test2.<br>


# Program test 1

## Backend (PHP webserver)

Place the shuffle.php file inside the php webserver and start the server. 

## Install and run the front end application
1. Configure the the corresponding PHP host url for API_HOST variable at ./config.js
2. Go to the Node js project root directory to install and run the application by following the below steps:
  1. $ npm install
  2. $ npm start


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br><br><br><br>



# Program test 2 - SQL Improvement
SQL query Performnce can be imporved by using the below techniques

1. Indexing: Ensure proper indexing for quick access to the records. 

2.  Elimninate the possible "OR" statements and break into smaller queries. 
    Take each component of the OR and convert it into its own SELECT statement and use UNION to combine the result set and removes duplicates.

ex:- 

SELECT Jobs.id AS `Jobs__id`,
Jobs.name AS `Jobs__name`,
Jobs.media_id AS `Jobs__media_id`,
Jobs.job_category_id AS `Jobs__job_category_id`,
......

FROM jobs Jobs

LEFT JOIN jobs_personalities JobsPersonalities
ON Jobs.id = (JobsPersonalities.job_id)
LEFT JOIN personalities Personalities
ON (Personalities.id = (JobsPersonalities.personality_id)
.....

WHERE JobCategories.name LIKE '%キャビンアテンダント%'

UNION

SELECT Jobs.id AS `Jobs__id`,
Jobs.name AS `Jobs__name`,
Jobs.media_id AS `Jobs__media_id`,
Jobs.job_category_id AS `Jobs__job_category_id`,
......

FROM jobs Jobs

LEFT JOIN jobs_personalities JobsPersonalities
ON Jobs.id = (JobsPersonalities.job_id)
LEFT JOIN personalities Personalities
ON (Personalities.id = (JobsPersonalities.personality_id)
.....

WHERE JobTypes.name LIKE '%キャビンアテンダント%'

UNION

SELECT Jobs.id AS `Jobs__id`,
Jobs.name AS `Jobs__name`,
Jobs.media_id AS `Jobs__media_id`,
Jobs.job_category_id AS `Jobs__job_category_id`,
......

FROM jobs Jobs

LEFT JOIN jobs_personalities JobsPersonalities
ON Jobs.id = (JobsPersonalities.job_id)
LEFT JOIN personalities Personalities
ON (Personalities.id = (JobsPersonalities.personality_id)
.....

WHERE Jobs.description LIKE '%キャビンアテンダント%'

.
.
.

3. Need to Use wildcard search as prefix or suffix as possible.

ex:-

....WHERE JobTypes.name LIKE 'キャビンアテンダント%' ...

