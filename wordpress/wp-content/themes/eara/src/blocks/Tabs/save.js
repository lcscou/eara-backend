const { RichText } = wp.blockEditor;

export default function Save({ attributes }) {
  const { tabs, activeTab, layout } = attributes;

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={`eara-tabs eara-tabs--${layout}`}>
      {/* Tabs Navigation */}
      <div className="eara-tabs__nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`eara-tabs__button ${
              activeTab === tab.id ? "eara-tabs__button--active" : ""
            }`}
            data-tab-id={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content Panels */}
      <div className="eara-tabs__panels">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`eara-tabs__panel ${
              activeTab === tab.id ? "eara-tabs__panel--active" : ""
            }`}
            data-tab-id={tab.id}
            style={{
              display: activeTab === tab.id ? "block" : "none",
            }}
          >
            {tab.image.url && (
              <div className="eara-tabs__image">
                <img
                  src={tab.image.url}
                  alt={tab.image.alt || tab.title}
                  className="eara-tabs__image-img"
                />
              </div>
            )}

            <div className="eara-tabs__text">
              <h3 className="eara-tabs__title">
                {tab.title}
              </h3>

              <div className="eara-tabs__description">
                <RichText.Content value={tab.content} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const tabs = document.querySelectorAll('.eara-tabs__button');
              const panels = document.querySelectorAll('.eara-tabs__panel');

              tabs.forEach(button => {
                button.addEventListener('click', function() {
                  const tabId = this.dataset.tabId;

                  // Remove active class from all buttons
                  tabs.forEach(b => b.classList.remove('eara-tabs__button--active'));
                  // Hide all panels
                  panels.forEach(p => {
                    p.classList.remove('eara-tabs__panel--active');
                    p.style.display = 'none';
                  });

                  // Add active class to clicked button
                  this.classList.add('eara-tabs__button--active');
                  // Show corresponding panel
                  const activePanel = document.querySelector(\`.eara-tabs__panel[data-tab-id="\${tabId}"]\`);
                  if (activePanel) {
                    activePanel.classList.add('eara-tabs__panel--active');
                    activePanel.style.display = 'block';
                  }
                });
              });

              // Set initial active state
              const firstButton = tabs[0];
              if (firstButton) {
                firstButton.classList.add('eara-tabs__button--active');
              }
            })();
          `,
        }}
      />
    </div>
  );
}
