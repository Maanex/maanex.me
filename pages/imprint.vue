<template>
  <div class="container">
    <h1>Impressum</h1>

    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
    <p>
      A&ZeroWidthSpace;ndr&ZeroWidthSpace;ea&ZeroWidthSpace;s&nbsp;Ma&ZeroWidthSpace;y<br>
      El&ZeroWidthSpace;isa&ZeroWidthSpace;beth&ZeroWidthSpace;enw&ZeroWidthSpace;eg&nbsp;4<br>
      91&ZeroWidthSpace;3&ZeroWidthSpace;15&nbsp;Ho&ZeroWidthSpace;ech&ZeroWidthSpace;st&ZeroWidthSpace;a&ZeroWidthSpace;dt
    </p>

    <h2>Kontakt</h2>
    <p>
      E-Mail: maanex.tude@gmail.com
    </p>

    <h2>Gültigkeitsbereich</h2>
    <p>
      Dieses Impressum umfasst die folgenden Webseiten:<br>
      - https://maanex.me/<br>
      - https://tude.ga/<br>
      - https://freestuffbot.xyz/<br>
    </p>

    <h3>Haftung f&uuml;r Inhalte</h3>
    <p>
      Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r
      eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
      verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
      Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
      gespeicherte fremde Informationen zu &uuml;berwachen oder nach
      Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
      hinweisen.
    </p>
    <p>
      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
      nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine
      diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
      einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von
      entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
      entfernen.
    </p>
    <h3>Haftung f&uuml;r Links</h3>
    <p>
      Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren
      Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese
      fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die
      Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
      Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
      Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
      &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
      Verlinkung nicht erkennbar.
    </p>
    <p>
      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
      ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
      Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
      entfernen.
    </p>
    <h3>Urheberrecht</h3>
    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
      Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung,
      Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der
      Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des
      jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
      nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.
    </p>
    <p>
      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
      werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
      Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
      Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
      entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
      wir derartige Inhalte umgehend entfernen.
    </p>
    <br>
    <a href="/" @click.prevent="back">
      Zurück
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    back () {
      window.history.back()
    }
  }
})
</script>

<style scoped lang="scss">
@import "~/assets/style/all.scss";

.container {
  padding: 5vmin;
  max-width: 400pt;

  h1 {
    display: block;
    font-family: $font-header;
    color: $color-header;
    font-size: 18pt;
  }

  h2 {
    display: block;
    font-family: $font-major;
    color: $color-major;
    font-size: 16pt;
  }

  h3 {
    display: block;
    font-family: $font-header;
    color: $color-major;
    font-size: 12pt;
  }

  span, a, p {
    display: block;
    font-family: $font-regular;
    color: $color-regular;
    font-size: 12pt;
  }

  a {
    color: $primary-five !important;
    font-size: 12pt !important;
    text-decoration: none;

    &:hover {
      color: $primary-four !important;
    }
  }
}
</style>
