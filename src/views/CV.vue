<template>
  <div>CV</div>
  <div class="container">
    <!-- Left vertical line -->
    <div class="container__line"></div>

    <!-- The timeline items container -->
    <ul class="container__items">
      <!-- Each timeline item -->
      <li class="container__item">
        <!-- The circle and title -->
        <div class="container__top">
          <!-- The circle -->
          <div class="container__circle"></div>

          <!-- The title -->
          <div class="container__title">
            Bachelor of Science UZH in Informatik
          </div>
        </div>

        <!-- The description -->
        <div class="container__desc">
          Das Hauptfach Softwaresysteme fokussiert sich auf
          <ul>
            <li>Softwarebasierte Systeme entwickeln und unterhalten</li>
            <li>Vermitteln von Grundlagen der technischen und theoretischen Informatik</li>
          </ul>
        </div>
      </li>
      <li class="container__item">
        <!-- The circle and title -->
        <div class="container__top">
          <!-- The circle -->
          <div class="container__circle"></div>

          <!-- The title -->
          <div class="container__title">
            Tutor für das Assessmentfach People-Oriented-Computing
          </div>
        </div>

        <!-- The description -->
        <div class="container__desc">
          ls Tutor half ich bei der Durchführung dieses englischsprachigen Kurses für ca. 200 Studierende. Dies umfasste untere anderem
          <ul>
            <li>Planung und Durchführung von Übungslektionen</li>
            <li>Korrektur von zwei Assignements</li>
            <li>Korrektur der Assessmentprüfung</li>
          </ul>
        </div>
      </li>
      <li class="container__item">
        <!-- The circle and title -->
        <div class="container__top">
          <!-- The circle -->
          <div class="container__circle"></div>

          <!-- The title -->
          <div class="container__title">
            Mentor: Führung und Organisation einer Gruppe von Erstsemestriegen
          </div>
        </div>

        <!-- The description -->
        <div class="container__desc">
          In meiner Funktion als Mentor begleitete ich eine Gruppe von ca. 15 Studierenden durch ihr erstes Informatiksemester an der UZH. Dabei habe ich
          <ul>
            <li>In einer Gruppe von Mentoren verschiedene Anlässe geplant und durchgeführt</li>
            <li>Praktische Erfahrung in Bereich Projektmanagement gesammelt</li>
            <li>Die Erstsemestrigen über verschiedene Kanäle (z.B. Newsletter) betreut</li>
          </ul>
        </div>
      </li>
      <li class="container__item">
        <!-- The circle and title -->
        <div class="container__top">
          <!-- The circle -->
          <div class="container__circle"></div>

          <!-- The title -->
          <div class="container__title">
            Juniorenstrainer im Unihockeysport (Unihockey Luzern)
          </div>
        </div>

        <!-- The description -->
        <div class="container__desc">
          Als Trainer für ULU habe ich unter anderem
          <ul>
            <li>Zwei mal pro Woche Juniorentrainings (9 - 14 Jahre) geleitet</li>
            <li>Meisterschafts- und Finalrunden als Coach und Assistenzcoach bestritten</li>
            <li>In den Sommerferien bei der Organisation und Leitung des Trainingslagers geholfent</li>
            <li>Verschiedene J&S-Kurse besucht und mich weitergebildet</li>
          </ul>
        </div>
      </li>

    </ul>
  </div>

</template>

<script>
export default {
  name: "CV"
}
</script>

<style scoped>
.container {
  /* Used to position the left vertical line */
  position: relative;
}

.container__line {
  /* Border */
  border-right: 2px solid #aaa;

  /* Positioned at the left */
  left: 16px;
  position: absolute;
  top: 0px;

  /* Take full height */
  height: 100%;
}

.container__items {
  /* Reset styles */
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}

.container__item {
  margin-bottom: 8px;
}

.container__top {
  /* Center the content horizontally */
  align-items: center;
  display: flex;
}

.container__circle {
  /* Rounded border */
  background-color: rgb(170, 170, 170);
  border-radius: 9999px;

  /* Size */
  height: 32px;
  width: 32px;
}

.container__title {
  /* Take available width */
  flex: 1;
}

.container__desc {
  /* Make it align with the title */
  margin-left: 48px;
}

</style>