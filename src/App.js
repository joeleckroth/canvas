import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div><img src="/bloomboard.svg" width="50%" alt="BloomBoard" /></div>
        <div><img src="/canvas.svg" width="50%" alt="Canvas" /></div>
        <div><img src="/bloomboard-logo.svg" width="50%" alt="BloomBoard Updated" /></div>
      </header>
      {/* Entry 1 */}
      <h2>Login</h2>
      <div className="responsive-three-column-grid">
        <div><a href="#img1-1"><img src="screenshots/bb-login.png" width="100%" alt="BloomBoard Login" /></a></div>
        <div><a href="#img2-1"><img src="screenshots/canvas-login.png" width="100%" alt="Canvas Login" /></a>
          <ul>
            <li>Course Cards</li>
            <li>ToDo List</li>
            <li>Customer Logo</li>
            <li>Custom Background Image</li>
          </ul>
        </div>
        <div><a href="#img3-1"><img src="screenshots/login.png" width="100%" alt="New Login" /></a>
        <ul>
            <li>Updated Color Scheme, Borders, Shadows, Button styles</li>
            <li>High-Def Background Image</li>
          </ul>
        </div>
      </div>
      {/* Entry 2 */}
      <h2>Dashboard</h2>
      <div className="responsive-three-column-grid">
        <div><a href="#img2-1"><img src="screenshots/bb-dashboard.png" width="100%" alt="BloomBoard Dashboard" /></a></div>
        <div><a href="#img2-2"><img src="screenshots/canvas-dashboard.png" width="100%" alt="Canvas Dashboard" /></a><a href="#img2-3"><img src="screenshots/planner-view.png" width="100%" alt="Planner View" /></a>
          <ul>
            <li>Course Cards</li>
            <li>ToDo List</li>
            <li>Customer Logo</li>
            <li>Multiple Views</li>
          </ul>
        </div>
        <div><a href="#img2-4"><img src="screenshots/dashboard.png" width="100%" alt="New Dashboard" /></a>
        <ul>
            <li>Updated Color Scheme, Borders, Shadows, Button styles</li>
            <li>Sticky Header</li>
            <li>Removed Profile and Notifications</li>
            <li>Course Card Graphics</li>
          </ul>
        </div>
      </div>

      {/* Entry 3 */}
      <h2>Profile</h2>
      <div className="responsive-three-column-grid">
        <div><a href="#img3-1"><img src="screenshots/bb-profile.png" width="100%" alt="BloomBoard Profile" /></a></div>
        <div><a href="#img3-2"><img src="screenshots/canvas-profile.png" width="100%" alt="Canvas Profile" /></a>
          <ul>
            <li>Left-Side Consistent Navigation</li>
            <li>All User Settings in Once Place</li>
          </ul>
        </div>
        <div><a href="#img3-3"><img src="screenshots/profile.png" width="100%" alt="New Profile" /></a>
        <ul>
            <li>Updated Color Scheme, Borders, Shadows, Button styles</li>
            <li>Sticky Header</li>
            <li>Consistent component usage (forms, buttons, tabs)</li>
          </ul>
        </div>
      </div>

     {/* Entry 4 */}
     <h2>Faculty Tooling</h2>
      <div className="responsive-three-column-grid">
        <div><a href="#img4-1"><img src="screenshots/bb-faculty-dashboard.png" width="100%" alt="BloomBoard Unit" /></a><a href="#img4-2"><img src="screenshots/bb-faculty-assessments.png" width="100%" alt="BloomBoard Unit 2" /></a></div>
        <div><a href="#img4-3"><img src="screenshots/gradebook.png" width="100%" alt="Canvas course work" /></a>
              <a href="#img4-4"><img src="screenshots/split-screen-rubric-grading.png" width="100%" alt="Canvas course work" /></a>
          <ul>
            <li>Assignment-Based</li>
            <li>Split-Screen Rubric Grading</li>
            <li>Extensive Gradebook</li>
          </ul>
        </div>
        <div><a href="#img4-5"><img src="screenshots/faculty-dashboard.png" width="100%" alt="Faculty Dashboard" /></a>
        <a href="#img4-6"><img src="screenshots/faculty-assessments.png" width="100%" alt="Faculty Dashboard" /></a>
        <ul>
            <li>Updated Color Scheme, Borders, Shadows, Button styles</li>
            <li>Sticky Header</li>
            <li>Consistent component usage (forms, buttons, tabs)</li>
          </ul>
        </div>
      </div>

      {/* Entry 5 */}
      <h2>Course</h2>
      <div className="responsive-three-column-grid">
        <div><a href="#img5-1"><img src="screenshots/bb-course.png" width="100%" alt="BloomBoard course" /></a><a href="#img5-2"><img src="screenshots/bb-course2.png" width="100%" alt="BloomBoard course 2" /></a></div>
        <div><a href="#img5-3"><img src="screenshots/canvas-course.png" width="100%" alt="Canvas course" /></a>
             <a href="#img5-4"><img src="screenshots/canvas-course2.png" width="100%" alt="Canvas course 2" /></a>
          <ul>
            <li>Left-Side Consistent Navigation</li>
            <li>Announcements</li>
            <li>Gradebook</li>
            <li>Modular Organization</li>
          </ul>
        </div>
        <div><a href="#img5-5"><img src="screenshots/course.png" width="100%" alt="New course" /></a>
        <ul>
            <li>Updated Color Scheme, Borders, Shadows, Button styles</li>
            <li>Sticky Header</li>
            <li>Consistent component usage (forms, buttons, tabs)</li>
          </ul>
        </div>
      </div>

      {/* Entry 6 */}
      <h2>Collaboration</h2>
      <div className="responsive-three-column-grid">
        <div><a href="#img6-1"><img src="screenshots/bb-collaboration.png" width="100%" alt="BloomBoard collaboration" /></a></div>
        <div><a href="#img6-2"><img src="screenshots/canvas-discussions.png" width="100%" alt="Canvas collaboration" /></a>
          <ul>
            <li>Left-Side Consistent Navigation</li>
            <li>Message Board Style</li>
            <li>Directly in Courses</li>
          </ul>
        </div>
        <div><a href="#img6-3"><img src="screenshots/collaboration.png" width="100%" alt="New collaboration" /></a>
        <ul>
            <li>Updated Color Scheme, Borders, Shadows, Button styles</li>
            <li>Sticky Header</li>
            <li>Consistent component usage (forms, buttons, tabs)</li>
          </ul>
        </div>
      </div>

      {/* Entry 7 */}
      <h2>Learner Coursework</h2>
      <div className="responsive-three-column-grid">
        <div><a href="#img7-1"><img src="screenshots/bb-unit.png" width="100%" alt="BloomBoard Unit" /></a><a href="#img7-1"><img src="screenshots/bb-unit2.png" width="100%" alt="BloomBoard Unit 2" /></a></div>
        <div><a href="#img7-3"><img src="screenshots/canvas-unit1.png" width="100%" alt="Canvas course work" /></a>
              <a href="#img7-4"><img src="screenshots/canvas-unit2.png" width="100%" alt="Canvas course work" /></a>
              <a href="#img7-5"><img src="screenshots/learner-submission.png" width="100%" alt="Canvas course work" /></a>
          <ul>
            <li>Assignment-Based</li>
            <li>Quizzes</li>
            <li>Simple Submission Button</li>
          </ul>
        </div>
        <div><a href="#img7-6"><img src="screenshots/unit.png" width="100%" alt="New Unit" /></a>
        <ul>
            <li>Updated Color Scheme, Borders, Shadows, Button styles</li>
            <li>Sticky Header</li>
            <li>Consistent component usage (forms, buttons, tabs)</li>
          </ul>
        </div>
      </div>

      {/* Entry 8 */}
      <h2>Table Styling</h2>
      <div className="responsive-three-column-grid">
        <div><a href="#img8-1"><img src="screenshots/bb-table.png" width="100%" alt="BloomBoard Current Tabular Data" /></a></div>
        <div><a href="#img8-2"><img src="screenshots/canvas-table.png" width="100%" alt="Canvas Slidein Table" /></a>
        <a href="#img8-3"><img src="screenshots/canvas-table-2.png" width="100%" alt="Canvas Slidein Table" /></a>
          <ul>
            <li>Multiple Table Styles</li>
            <li>Minimal Look/Feel</li>
          </ul>
        </div>
        <div><a href="#img8-4"><img src="screenshots/users.png" width="100%" alt="New Table Styling" /></a><a href="#img8-5"><img src="screenshots/assessments.png" width="100%" alt="New Table Styling 2" /></a>
        <ul>
            <li>Consistent Table Styling</li>
            <li className="purple">Need:  Should be consistent with table header styles</li>
            <li>Consistent component usage (forms, buttons, tabs)</li>
          </ul>
        </div>
      </div>

      {/* Entry 9 */}
      <h2>Degree View</h2>
      <div className="responsive-three-column-grid">
        <div><a href="#img9-1"><img src="screenshots/bb-degree.png" width="100%" alt="BloomBoard Current Degree View" /></a><a href="#img9-2"><img src="screenshots/bb-degree-2.png" width="100%" alt="BloomBoard Current Degree View" /></a></div>
        <div>No Comparison</div>
        <div><a href="#img9-2"><img src="screenshots/degree.png" width="100%" alt="New Degree Styling" /></a>
        <ul>
            <li>Updated Color Scheme, Borders, Shadows, Button styles</li>
            <li>High-Definition Image</li>
            <li>Consistent component usage (forms, buttons, tabs)</li>
          </ul>
        </div>
      </div>
     


      {/* List of images for lightbox */}

      <a href="#" className="lightbox" id="img1-1"><img src="screenshots/bb-login.png" width="100%" alt="BloomBoard Login" /></a>
      <a href="#" className="lightbox" id="img2-1"><img src="screenshots/canvas-login.png" width="100%" alt="Canvas Login" /></a>
      <a href="#" className="lightbox" id="img3-1"><img src="screenshots/login.png" width="100%" alt="New Login" /></a>

      <a href="#" className="lightbox" id="img2-1"><img src="screenshots/bb-dashboard.png" width="100%" alt="BloomBoard Dashboard" /></a>
      <a href="#" className="lightbox" id="img2-2"><img src="screenshots/canvas-dashboard.png" width="100%" alt="Canvas Dashboard" /></a>
      <a href="#" className="lightbox" id="img2-3"><img src="screenshots/planner-view.png" width="100%" alt="Canvas Planner View" /></a>
      <a href="#" className="lightbox" id="img2-4"><img src="screenshots/dashboard.png" width="100%" alt="BloomBoard Dashboard" /></a>

      <a href="#" className="lightbox" id="img3-1"><img src="screenshots/bb-profile.png" width="100%" alt="BloomBoard Profile" /></a>
      <a href="#" className="lightbox" id="img3-2"><img src="screenshots/canvas-profile.png" width="100%" alt="Canvas Profile" /></a>
      <a href="#" className="lightbox" id="img3-3"><img src="screenshots/Profile.png" width="100%" alt="New Profile" /></a>

      <a href="#" className="lightbox" id="img4-1"><img src="screenshots/bb-faculty-dashboard.png" width="100%" alt="BloomBoard Faculty Dashboard" /></a>
      <a href="#" className="lightbox" id="img4-2"><img src="screenshots/bb-faculty-assessments.png" width="100%" alt="BloomBoard Faculty Assessments" /></a>
      <a href="#" className="lightbox" id="img4-3"><img src="screenshots/gradebook.png" width="100%" alt="Canvas Gradebook" /></a>
      <a href="#" className="lightbox" id="img4-4"><img src="screenshots/split-screen-rubric-grading.png" width="100%" alt="Split Screen" /></a>
      <a href="#" className="lightbox" id="img4-5"><img src="screenshots/faculty-dashboard.png" width="100%" alt="Faculty Dashboard" /></a>
      <a href="#" className="lightbox" id="img4-6"><img src="screenshots/faculty-assessments.png" width="100%" alt="Faculty Assessments" /></a>

      <a href="#" className="lightbox" id="img5-1"><img src="screenshots/bb-course.png" width="100%" alt="BloomBoard Faculty Dashboard" /></a>
      <a href="#" className="lightbox" id="img5-2"><img src="screenshots/bb-course2.png" width="100%" alt="BloomBoard Faculty Assessments" /></a>
      <a href="#" className="lightbox" id="img5-3"><img src="screenshots/canvas-course.png" width="100%" alt="Canvas Gradebook" /></a>
      <a href="#" className="lightbox" id="img5-4"><img src="screenshots/canvas-course2.png" width="100%" alt="Split Screen" /></a>
      <a href="#" className="lightbox" id="img5-5"><img src="screenshots/course.png" width="100%" alt="Faculty Dashboard" /></a>

      <a href="#" className="lightbox" id="img6-1"><img src="screenshots/bb-collaboration.png" width="100%" alt="BloomBoard collaboration" /></a>
      <a href="#" className="lightbox" id="img6-2"><img src="screenshots/canvas-discussions.png" width="100%" alt="Canvas collaboration" /></a>
      <a href="#" className="lightbox" id="img6-3"><img src="screenshots/collaboration.png" width="100%" alt="New collaboration" /></a>

      <a href="#" className="lightbox" id="img7-1"><img src="screenshots/bb-unit.png" width="100%" alt="BloomBoard Unit" /></a>
      <a href="#" className="lightbox" id="img7-2"><img src="screenshots/bb-unit2.png" width="100%" alt="BloomBoard Unit" /></a>
      <a href="#" className="lightbox" id="img7-3"><img src="screenshots/canvas-unit1.png" width="100%" alt="Unit" /></a>
      <a href="#" className="lightbox" id="img7-4"><img src="screenshots/canvas-unit2.png" width="100%" alt="Unit" /></a>
      <a href="#" className="lightbox" id="img7-5"><img src="screenshots/learner-submission.png" width="100%" alt="Unit" /></a>
      <a href="#" className="lightbox" id="img7-6"><img src="screenshots/unit.png" width="100%" alt="Unit" /></a>

      <a href="#" className="lightbox" id="img8-1"><img src="screenshots/bb-table.png" width="100%" alt="BloomBoard Faculty Dashboard" /></a>
      <a href="#" className="lightbox" id="img8-2"><img src="screenshots/canvas-table.png" width="100%" alt="BloomBoard Faculty Assessments" /></a>
      <a href="#" className="lightbox" id="img8-3"><img src="screenshots/canvas-table-2.png" width="100%" alt="Canvas Gradebook" /></a>
      <a href="#" className="lightbox" id="img8-4"><img src="screenshots/users.png" width="100%" alt="Split Screen" /></a>
      <a href="#" className="lightbox" id="img8-5"><img src="screenshots/assessments.png" width="100%" alt="Faculty Dashboard" /></a>

      <a href="#" className="lightbox" id="img9-1"><img src="screenshots/bb-degree.png" width="100%" alt="BloomBoard Degree" /></a>
      <a href="#" className="lightbox" id="img9-2"><img src="screenshots/bb-degree-2.png" width="100%" alt="BloomBoard New Degree" /></a>

    </div>
  );
}

export default App;
