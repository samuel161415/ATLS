// terms-plugin-loader.service.ts
import { Injectable } from '@angular/core';
import { ConsentService } from './consent.service';

@Injectable({
  providedIn: 'root'
})
export class TermsPluginLoaderService {
    constructor(private consentService: ConsentService) {}
  
    loadPlugin(): void {
      const _slug = "[termsfeed][pc-loader-1]";
      const _token = "d55fc7bf462345899345196be3d8e53a";
      const _cdn_endpoint = "cdn.termsfeedtag.com";
      const _cdn_protocol = "https";
      const _debug = false;
  
      if (_debug) console.debug (_slug, "[dd][5e8ada55]", "pre-initializing (stage-1a)...");
  
      const _pluginUrl = `${_cdn_protocol}://${_cdn_endpoint}/plugins/pc/v1/${_token}/plugin-2.js`;
  
      const _pluginScript = document.createElement("script");
      _pluginScript.onerror = (_error) => {
        console.error (_slug, "[ee][b1b476da]", "plugin failed!", _error);
      };
      _pluginScript.async = true;
      _pluginScript.src = _pluginUrl;
  
      // Load the plugin only if consent has been given
      if (this.consentService.getConsentStatus()) {
        document.body.appendChild(_pluginScript);
      }
    }
  }
  