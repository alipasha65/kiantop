/* ==========================================================================
   VEGA — THEME SWITCH (dark ⇄ light)
   تم روشن به‌صورت یک فایل CSS جدا لود می‌شود و روی theme-hud.css سوار می‌شود.
   ========================================================================== */
(function () {
    var KEY = 'vegaTheme';
    var LINK_ID = 'vegaLightCss';

    function lightLink() {
        return document.getElementById(LINK_ID);
    }

    function apply(theme) {
        var light = theme === 'light';

        document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark');

        var link = lightLink();
        if (link) {
            /* media="not all" یعنی دانلود شده ولی اعمال نشده — بدون پرش و فلش */
            link.setAttribute('media', light ? 'all' : 'not all');
        }

        try { localStorage.setItem(KEY, light ? 'light' : 'dark'); } catch (e) {}

        var btn = document.querySelector('.theme-btn');
        if (btn) {
            btn.setAttribute('aria-pressed', light ? 'true' : 'false');
            btn.setAttribute('title', light ? 'Dark mode' : 'Light mode');
        }
    }

    window.setVegaTheme = apply;

    window.toggleTheme = function () {
        apply(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    };

    var saved = 'dark';
    try { saved = localStorage.getItem(KEY) || 'dark'; } catch (e) {}
    apply(saved);
})();
