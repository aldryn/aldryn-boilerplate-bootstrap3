describe('Django CMS website', function() {
    it('should have a title', function() {
        browser.get('http://www.django-cms.org');

        expect(browser.getTitle()).toContain('django-cms');
    });
});
