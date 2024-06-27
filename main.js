function getResults() {
    const table = document.querySelector('table');
    if (!table) {
        console.error('Table not found.');
        return [];
    }

    const rows = table.querySelectorAll('tr');
    const results = [];

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll('td');

        if (cells.length < 5) continue; 

        const examNumber = cells[0].innerText.trim();
        const points = Number(cells[2].innerText.trim());
        const division = cells[3].innerText.trim();
        const detailedSubjects = cells[4].innerText.trim();

        const subjects = [];

        const subjectsArray = detailedSubjects.split(/\s+/);
        for (let j = 0; j < subjectsArray.length; j += 2) {
            if (subjectsArray[j] && subjectsArray[j + 1]) {
                subjects.push({
                    subject: subjectsArray[j].replace(':', ''), 
                    grade: subjectsArray[j + 1]
                });
            }
        }

        results.push({
            examNumber: examNumber,
            points: points,
            division: division,
            subjects: subjects
        });
    }

    return results;
}

function createMockTable() {
    const data = `
    <table>
    <tr>
        <th>CND</th>
        <th>SEX</th>
        <th>AGGGT</th>
        <th>DIV</th>
        <th>DETAILED SUBJECTS</th>
    </tr>
    <tr>
        <td>S4459/0001</td>
        <td>M</td>
        <td>14</td>
        <td>I</td>
        <td>CIV - 'C' HIST - 'C' GEO - 'A' KISW - 'B' ENGL - 'B' PHY - 'C' CHEM - 'B' BIO - 'C' COMP STUD - 'B' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0002</td>
        <td>M</td>
        <td>15</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'B' GEO - 'B' KISW - 'B' ENGL - 'B' BIO - 'C' COMP STUD - 'C' B/MATH - 'C' COMM - 'C' B/KEEPING - 'C'</td>
    </tr>
    <tr>
        <td>S4459/0003</td>
        <td>M</td>
        <td>14</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'C' GEO - 'A' KISW - 'B' ENGL - 'C' PHY - 'D' CHEM - 'B' BIO - 'B' AGRI - 'C' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0004</td>
        <td>M</td>
        <td>8</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'C' PHY - 'B' CHEM - 'A' BIO - 'C' AGRI - 'C' B/MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0005</td>
        <td>M</td>
        <td>10</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'B' KISW - 'A' ENGL - 'A' LIT ENG - 'B' BIO - 'B' B/MATH - 'C' COMM - 'B' B/KEEPING - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0006</td>
        <td>M</td>
        <td>12</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'B' GEO - 'B' KISW - 'A' ENGL - 'A' BIO - 'C' AGRI - 'C' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0007</td>
        <td>M</td>
        <td>13</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'B' GEO - 'B' KISW - 'A' ENGL - 'C' PHY - 'C' CHEM - 'B' BIO - 'B' AGRI - 'C' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0008</td>
        <td>M</td>
        <td>18</td>
        <td>II</td>
        <td>CIV - 'B' HIST - 'C' GEO - 'C' KISW - 'B' ENGL - 'C' LIT ENG - 'C' BIO - 'C' B/MATH - 'C' COMM - 'C' B/KEEPING - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0009</td>
        <td>M</td>
        <td>15</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'A' GEO - 'B' KISW - 'C' ENGL - 'C' PHY - 'D' CHEM - 'B' BIO - 'B' AGRI - 'C' B/MATH - 'C'</td>
    </tr>
    <tr>
        <td>S4459/0010</td>
        <td>M</td>
        <td>11</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'B' ENGL - 'B' PHY - 'C' CHEM - 'B' BIO - 'C' AGRI - 'C' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0011</td>
        <td>M</td>
        <td>15</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'C' GEO - 'B' B/KNOWL - 'A' KISW - 'B' ENGL - 'B' BIO - 'C' B/MATH - 'C' COMM - 'C' B/KEEPING - 'C'</td>
    </tr>
    <tr>
        <td>S4459/0012</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'A' PHY - 'C' CHEM - 'A' BIO - 'A' B/MATH - 'A' ADD MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0013</td>
        <td>M</td>
        <td>18</td>
        <td>II</td>
        <td>CIV - 'B' HIST - 'C' GEO - 'C' B/KNOWL - 'B' KISW - 'B' ENGL - 'C' LIT ENG - 'D' BIO - 'C' B/MATH - 'F'</td>
    </tr>
    <tr>
        <td>S4459/0014</td>
        <td>M</td>
        <td>11</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'B' GEO - 'B' KISW - 'A' ENGL - 'A' PHY - 'C' CHEM - 'B' BIO - 'C' B/MATH - 'A' ADD MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0015</td>
        <td>M</td>
        <td>10</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'B' LIT ENG - 'B' BIO - 'B' B/MATH - 'B' COMM - 'C' B/KEEPING - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0016</td>
        <td>M</td>
        <td>19</td>
        <td>II</td>
        <td>CIV - 'B' HIST - 'C' GEO - 'C' B/KNOWL - 'B' KISW - 'C' ENGL - 'C' LIT ENG - 'D' BIO - 'C' B/MATH - 'D'</td>
    </tr>
    <tr>
        <td>S4459/0017</td>
        <td>M</td>
        <td>8</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'B' PHY - 'C' CHEM - 'A' BIO - 'A' AGRI - 'B' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0018</td>
        <td>M</td>
        <td>9</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'B' GEO - 'A' KISW - 'A' ENGL - 'B' PHY - 'C' CHEM - 'A' BIO - 'A' AGRI - 'B' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0019</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'A' PHY - 'A' CHEM - 'A' BIO - 'A' B/MATH - 'A' ADD MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0020</td>
        <td>M</td>
        <td>9</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'B' GEO - 'A' KISW - 'A' ENGL - 'B' PHY - 'C' CHEM - 'A' BIO - 'B' B/MATH - 'A' ADD MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0021</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'B' PHY - 'C' CHEM - 'A' BIO - 'B' COMP STUD - 'A' B/MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0022</td>
        <td>M</td>
        <td>12</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'C' GEO - 'A' B/KNOWL - 'A' KISW - 'A' ENGL - 'C' BIO - 'B' B/MATH - 'C' COMM - 'C' B/KEEPING - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0023</td>
        <td>M</td>
        <td>20</td>
        <td>II</td>
        <td>CIV - 'C' HIST - 'C' GEO - 'B' KISW - 'C' ENGL - 'C' LIT ENG - 'C' BIO - 'C' B/MATH - 'F'</td>
    </tr>
    <tr>
        <td>S4459/0024</td>
        <td>M</td>
        <td>8</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'B' KISW - 'A' ENGL - 'B' PHY - 'C' CHEM - 'A' BIO - 'A' AGRI - 'B' B/MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0025</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'B' PHY - 'D' CHEM - 'A' BIO - 'A' AGRI - 'B' B/MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0026</td>
        <td>M</td>
        <td>13</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'B' GEO - 'B' KISW - 'B' ENGL - 'C' PHY - 'C' CHEM - 'B' BIO - 'B' AGRI - 'C' B/MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0027</td>
        <td>M</td>
        <td>10</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'B' B/KNOWL - 'A' KISW - 'A' ENGL - 'B' BIO - 'B' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0028</td>
        <td>M</td>
        <td>19</td>
        <td>II</td>
        <td>CIV - 'C' HIST - 'C' GEO - 'B' KISW - 'C' ENGL - 'C' LIT ENG - 'C' BIO - 'C' B/MATH - 'B' COMM - 'C' B/KEEPING - 'C'</td>
    </tr>
    <tr>
        <td>S4459/0029</td>
        <td>M</td>
        <td>15</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'B' GEO - 'B' KISW - 'B' ENGL - 'C' PHY - 'D' CHEM - 'B' BIO - 'B' AGRI - 'C' B/MATH - 'C'</td>
    </tr>
    <tr>
        <td>S4459/0030</td>
        <td>M</td>
        <td>11</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'B' GEO - 'B' B/KNOWL - 'A' KISW - 'A' ENGL - 'B' BIO - 'B' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0031</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'A' PHY - 'C' CHEM - 'A' BIO - 'A' AGRI - 'C' B/MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0032</td>
        <td>M</td>
        <td>10</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'B' GEO - 'A' B/KNOWL - 'A' KISW - 'A' ENGL - 'A' PHY - 'C' CHEM - 'B' BIO - 'C' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0033</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'A' PHY - 'C' CHEM - 'A' BIO - 'B' COMP STUD - 'A' B/MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0034</td>
        <td>M</td>
        <td>14</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'B' GEO - 'B' KISW - 'A' ENGL - 'B' LIT ENG - 'C' BIO - 'C' B/MATH - 'F'</td>
    </tr>
    <tr>
        <td>S4459/0035</td>
        <td>M</td>
        <td>8</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'B' PHY - 'C' CHEM - 'A' BIO - 'B' B/MATH - 'A' ADD MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0036</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'A' PHY - 'C' CHEM - 'A' BIO - 'A' AGRI - 'B' B/MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0037</td>
        <td>M</td>
        <td>9</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'B' PHY - 'C' CHEM - 'A' BIO - 'B' AGRI - 'B' B/MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0038</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'A' PHY - 'C' CHEM - 'A' BIO - 'B' B/MATH - 'A' ADD MATH - 'B'</td>
    </tr>
    <tr>
        <td>S4459/0039</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'A' PHY - 'B' CHEM - 'A' BIO - 'A' B/MATH - 'A' ADD MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0040</td>
        <td>M</td>
        <td>7</td>
        <td>I</td>
        <td>CIV - 'A' HIST - 'A' GEO - 'A' KISW - 'A' ENGL - 'A' PHY - 'C' CHEM - 'A' BIO - 'B' COMP STUD - 'A' B/MATH - 'A'</td>
    </tr>
    <tr>
        <td>S4459/0041</td>
        <td>M</td>
        <td>12</td>
        <td>I</td>
        <td>CIV - 'B' HIST - 'C' GEO - 'B' KISW - 'B' ENGL - 'B' BIO - 'C' COMP STUD - 'B' B/MATH - 'A' COMM - 'C' B/KEEPING - 'A'</td>
    </tr>
</table>
</body>
</html>`;
    document.body.innerHTML += data;
}

createMockTable();

console.log(getResults());
