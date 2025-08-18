<?php

namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\RequestStack;

class CountryListener
{
    private RequestStack $requestStack;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    public function __invoke(RequestEvent $event): void
    {
        $request = $event->getRequest();

        // Only process main GET requests
        if (!$event->isMainRequest() || $request->getMethod() !== 'GET') {
            return;
        }

        $path = $request->getPathInfo();

        // Skip admin, preview, and internal routes
        if ($this->shouldSkipRedirect($path, $request)) {
            return;
        }

        $session = $this->requestStack->getSession();

        // Only redirect once per session
        if ($session->has('redirected')) {
            return;
        }

        $session->set('redirected', true);
        $countryCode = strtolower($request->headers->get('CF-IPCountry'));

        // Redirect Dutch users to /nl if not already there
        if ($countryCode === 'nl' && $path !== '/nl') {
            $event->setResponse(new RedirectResponse('/nl'));
        }
    }

    private function shouldSkipRedirect(string $path, $request): bool
    {
        return str_starts_with($path, '/admin') ||
            str_starts_with($path, '/_') ||
            str_contains($path, 'preview') ||
            $request->query->has('preview') ||
            $request->headers->has('X-Sulu-Preview') ||
            $request->isXmlHttpRequest();
    }
}
